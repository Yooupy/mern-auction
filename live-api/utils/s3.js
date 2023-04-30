const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json(result);
        }
      }
    );
    req.file.stream.pipe(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
