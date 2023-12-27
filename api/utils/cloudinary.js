const cloudinary = require("cloudinary").v2;
// const fs = require("fs");

cloudinary.config({
  cloud_name: "dxms56mg3",
  api_key: "237992534271278",
  api_secret: "1mhjsELpIRfrtHMtAmVg8f6WZrk",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlink(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

module.exports = uploadOnCloudinary;
