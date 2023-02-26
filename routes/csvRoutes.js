const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.uploadView);
router.post("/upload-csv", indexController.uploadCSV);
router.get("/open", indexController.open);
router.get("/delete", indexController.deleteCSV);

module.exports = router;
