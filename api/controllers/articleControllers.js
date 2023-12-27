const Article = require("../Models/articleModel");
const cloudinary = require("../utils/cloudinary");
const upload = require("../middlerware/multer.middleware");

exports.createArticle = async (req, res) => {
  // Assuming you have the necessary data in req.body and req.file

  // Upload image to Cloudinary

  try {
    const result = await cloudinary(req.file.path);
    // Create a new Article instance
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      tags: req.body.tags, // Assuming you have tags in req.body
      images: [
        {
          url: result.secure_url, // Use secure_url for HTTPS
          caption: req.body.caption, // Assuming you have caption in req.body
        },
      ],
      cloudinaryId: result.public_id,
      imageUrl: result.secure_url,
    });

    // Save the article to the database
    const savedArticle = await newArticle.save();

    // Send a response with the saved article data
    res.status(200).json({
      success: true,
      message: "Article created and saved successfully",
      data: savedArticle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error saving article to the database",
    });
  }
};
