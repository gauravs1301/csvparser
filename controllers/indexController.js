// Importing required modules
const express = require("express");
const fastCsv = require("fast-csv");
const csvparse = require("csv-parser");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Initialize an empty array to store saved file names
const savedfiles = [];

// Define multer storage configuration to store CSV files in the "uploads" folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Define file filter to accept only CSV files
const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "text/csv") {
    console.log("File is not CSV type");
    cb(null, false);
  }
  cb(null, true);
};

// Initialize multer instance with the storage and file filter configuration to upload a single CSV file
const upload = multer({ storage, fileFilter }).single("csvfile");

// Upload and store single CSV file
module.exports.uploadCSV = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send(err);
    } else if (!req.file) {
      return res.status(400).send("No file was uploaded.");
    } else if (req.file) {
      savedfiles.push(req.file.filename);
    }
    console.log(req.file);
    return res.redirect("back");
  });
};

// Render saved file names on the index page
module.exports.uploadView = async (req, res) => {
  return res.render("index", {
    files: savedfiles,
  });
};

// Delete a CSV file from the array and the "uploads" folder
module.exports.deleteCSV = (req, res) => {
  const index = req.query.index;
  const fileName = savedfiles[index];
  fs.unlink(path.join(__dirname, `../uploads/${fileName}`), (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    savedfiles.splice(index, 1);
    return res.redirect("back");
  });
};

// Parse the data in a CSV file and render it on the fileview page
module.exports.open = function (req, res) {
  const results = []; // Initialize an empty array to store the data in JSON format
  const index = req.query.index;
  const uploadedFileNames = fs.readdirSync(path.join(__dirname, "../uploads"));
  const uploadedFileName = uploadedFileNames[index];
  const filePath = path.join(__dirname, "../uploads", uploadedFileName);

  // Create a read stream from the CSV file and pipe it to csvparse to parse the data
  fs.createReadStream(filePath)
    .pipe(csvparse())
    .on("data", (data) => results.push(data)) // push each row of data to the results array
    .on("end", () => {
      return res.render("fileview", {
        csvData: results,
      });
    });
};

// This code defines several functions for handling the uploading, viewing, and deleting of CSV files.

// The "express" module is imported along with several other modules for handling CSV files, file paths, and file uploads.

// An empty array called "savedfiles" is initialized to keep track of uploaded CSV files.

// Multer is configured to accept only CSV files and to store them in the "uploads" folder.

// A function called "uploadCSV" is defined to handle the upload
