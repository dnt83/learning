var express = require("express");

var router = express.Router();

router.get("/", function (req, res, next) {
       res.render('atanivn', {title: "Atani Matacha Tea"});
});

module.exports = router;