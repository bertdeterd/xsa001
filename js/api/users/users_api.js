"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var xssec = require("sap-xssec");
var xsHDBConn = require("sap-hdbext");
var xsenv = require("sap-xsenv");
 
module.exports = function(){
	var app = express();
	app.use(bodyParser.json());

	app.route("/users")
	  .get(function(req, res) {
	    res.send("Hello World Node.js");
	});

   return app;
};

/*
var express = require("express");
var userRouter = express.Router();
//var passport = require("passport");

var router = function() {

	userRouter.route('/users')
		.get(function(req, res) {
			console.log(req.body);

		});
	return userRouter;
};

module.exports = router;
*/
