"use strict";
const router = require("express").Router();
const hdb = require("sap-hdbext");
const cds = require("sap-cds");

var oUser = null;

cds.$importEntities([{
		$entity: "xsa001.db::UserCase.User"
	}, {
		$entity: "xsa001.db::UserCase.Divers"
	}],
	(error, entities) => {
		oUser = entities['xsa001.db::UserCase.User'];
	}
);

router.get("/users", (req, res) => {
	oUser.$query().$execute( (err, results) => {
		if (err) {
			res.type("text/plain").status(500).send("ERROR: " + err);
		} else {
			res.type("application/json").status(200).send(results);
		}
	});
});





router.get("/users", (req, res) => {
	oUser.$query().$execute(function(err, results) {
		if (err) {
			res.type("text/plain").status(500).send("ERROR: " + err);
		} else {
			res.type("application/json").status(200).send(results);
		}
	});
});

router.get("/", (req, res) => res.send("Hello World Node.js"));

//const query =
//	`SELECT "name" FROM "xsa001.db::UserCase.User"`; //" "OGJPTBOE5TDDC3IK_PHRADIUM_SCHEMA"."PurchaseOrder.Header"`;

/*
client.prepare(query, (err, statement) => {
	statement.exec([], (err, results) => {
		if (err) {
			res.type("text/plain").status(500).send("ERROR: " + err);
		} else {
			res.type("application/json").status(200).send(res);
		}
	});
});
*/

module.exports = router;