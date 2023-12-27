const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../middlerware/multer.middleware");
const { createArticle } = require("../controllers/articleControllers");
router.post("/upload", upload.single("image"), createArticle);
module.exports = router;
