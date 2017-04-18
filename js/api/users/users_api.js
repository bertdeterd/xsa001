"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var xssec = require("sap-xssec");
var xsHDBConn = require("sap-hdbext");
var xsenv = require("sap-xsenv");

var userRouter = express.Router();

var router = function() {

	userRouter.route('/users')
		.get(function(req, res) {
			 res.send("Hello World Node.js");
		});
	return userRouter;
};

module.exports = router;
