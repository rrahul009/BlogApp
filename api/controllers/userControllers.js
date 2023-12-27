const userModel = require("../Models/userModel");
const CryptoJS = require("crypto-js");

exports.userRegistration = async (req, res) => {
  try {
    const { name, email, password, confirmpassword, mobile } = req.body;

    if (!name || !email || !password || !confirmpassword || !mobile) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const ciphertext = CryptoJS.AES.encrypt(
      password,
      process.env.CRYPTO_SECRETE_KEY
    ).toString();

    const userData = new userModel({
      name,
      email,
      password: ciphertext,
      mobile,
    });

    const savedUser = await userData.save();
    res.status(201).json({
      message: "User registered successfully",
      savedUser: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error occurred during registration",
      error: error.message,
    });
  }
};
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found! register please!",
      });
    }
    const bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_SECRETE_KEY
    );
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (originalText !== password) {
      return res.status(400).json({
        message: "Invalid credential",
      });
    }
    const { password:savedPassword, ...others } = user._doc;
    return res.status(200).json({
      message: "user login successfully",
      user: others,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error occure while login",
    });
  }
};
