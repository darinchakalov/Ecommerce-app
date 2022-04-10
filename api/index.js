global.__basedir = __dirname;
require("dotenv").config();
const dbConnector = require("./config/db");
// const mongoose = require('mongoose');
const apiRouter = require("./router");
const cors = require("cors");
// const config = require('./config/config');
const { errorHandler } = require("./utils");

dbConnector()
	.then(() => {
		const config = require("./config/config");

		const app = require("express")();
		require("./config/express")(app);

		app.use(function (req, res, next) {
			res.header("Access-Control-Allow-Origin", "http://angular.f4ster.com");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});

		app.use(
			cors({
				origin: config.origin,
				credentials: true,
			})
		);

		app.use("/api", apiRouter);

		app.use(errorHandler);

		app.listen(config.port, console.log(`Listening on port ${config.port}!`));
	})
	.catch(console.error);
