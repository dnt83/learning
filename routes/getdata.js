var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

mongoose.connect("mongodb://localhost/jetbrains");
var Product = mongoose.model("Product",{name: String});

router.get("/", function (req, res, next) {
    Product.find(function(err, products) {
       res.render('product', {products: products});
    });
});

module.exports = router;