const path = require("path");
const express = require("express");
const router = express.Router();
console.log("html routes loaded")

// module.exports = function (app) {
router.get("/exercise", function (req, res) {
    console.log("exercise html routes")
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/", function (req, res) {
    console.log("/ html routes")

    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", function (req, res) {
    console.log("stats html routes")

    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// }

module.exports = router;


