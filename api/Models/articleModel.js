const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  tags: [
    {
      type: String,
    },
  ],
  images: [
    {
      url: {
        type: String,
      },
      caption: {
        type: String,
      },
    },
  ],
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
