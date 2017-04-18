/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var xsjs  = require("sap-xsjs");
var xsenv = require("sap-xsenv");
var port  = process.env.PORT || 3000;
var server = require('http').createServer();
var express = require("express");

var userRouter = require("./api/users/users_api");

var app = express();

//also add /api route to xs-app.json 
app.use("/api", userRouter());

var options = xsjs.extend({
	//anonymous : true, // remove to authenticate calls
	redirectUrl : "/index.xsjs"
});


try {
	options = Object.assign(options, xsenv.getServices({ hana: {tag: "hana"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}


try {
	options = Object.assign(options, xsenv.getServices({ uaa: {tag: "xsuaa"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}

//Add XSJS to the base app
var xsjsApp = xsjs(options);
app.use(xsjsApp);

server.on('request', app);
server.listen(port, function () {
    console.log('HTTP Server: ' + server.address().port );
});


