/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

const xsjs  = require("sap-xsjs");
const xsenv = require("sap-xsenv");
const port  = process.env.PORT || 3000;
const server = require("http").createServer();

const init = require("./initialize");
//const node = require("./myNode");
const userRouter = require("./api/users/users_api");

const options = {
	//anonymous : true, // remove to authenticate calls
	redirectUrl : "/index.xsjs"
};

const app = init.initExpress();

app.use("/api", userRouter);

init.initXSJS(app);

// start server
server.on("request", app);
server.listen(port, () => console.info("Server listening on port %d", port))


