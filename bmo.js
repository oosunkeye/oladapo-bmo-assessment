const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const pool = mysql.createPool({
	connectionLimit: 100,
	host: "us-cdbr-east-02.cleardb.com",
	user: "*******",
	password: "*******",
	database: "********",
});

app.get("/", (req, res) => {
	res.send("connected...");
});

app.post("/search", (req, res) => {
	// cuisines
	const city = req.body.city;
	const refineAddress = req.body.refineAddress;

	pool.getConnection((err, connection) => {
		if (err) throw err;

		if (refineAddress.length > 0) {
			let stmt = "SELECT * FROM cuisines WHERE city = ?  AND time = '?'";
			let todo = [city, refineAddress];

			// connection.query(stmt, todo, async (err, result, fields) => {
			connection.query(
				`SELECT * FROM cuisines WHERE city = '${city}' and time like '%${refineAddress}%'`,
				async (err, result, fields) => {
					if (err) {
						return res.send(err.message);
					}

					if (result.length > 0) {
						res.send(result);
					} else {
						res.send({ message: "Invalid Search" });
					}
				}
			);
		} else {
			let stmt = `SELECT * FROM cuisines WHERE city = ?`;
			let todo = [city];

			connection.query(stmt, todo, async (err, result, fields) => {
				if (err) {
					return res.send(err.message);
				}

				if (result.length > 0) {
					res.send(result);
				} else {
					res.send({ message: "Invalid Search" });
				}
			});
		}
	});
});

app.listen(process.env.PORT || port, () =>
	console.log(`Listening on port ${port}`)
);
