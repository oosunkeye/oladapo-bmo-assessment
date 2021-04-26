import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./component/Card";
import Axios from "axios";
import {
	Form,
	Button,
	FormGroup,
	FormControl,
	ControlLabel,
	Col,
	Container,
	Row,
} from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";

function App() {
	const [city, setCity] = useState("");
	const [rest, setRest] = useState("");
	const [empty, setEmpty] = useState(false);

	const [listings, SetListings] = useState([]);

	// useEffect(() => {
	// 	loadListings();
	// }, []);

	const searchCity = (text) => {
		setCity(text.target.value);
		// console.log(city);
	};

	const searchRest = (text) => {
		setRest(text.target.value);
		// console.log(rest);
	};

	const storeData = (event) => {
		console.log(city);
		// alert(rest);

		Axios.post("https://bmo-assessment.herokuapp.com/search", {
			city: city,
			refineAddress: rest,
		}).then((result) => {
			if (!result.data.message) {
				console.log(result.data);
				SetListings(result.data);
				setEmpty(false);
			} else {
				console.log("Empty");
				setEmpty(true);

				// console.log(msgError);
			}
		});

		event.preventDefault();
	};

	return (
		<React.Fragment>
			<Container>
				<div>
					<h1 style={{ height: "200px" }}></h1>
					<h1 style={{ color: "blue", height: "60px" }}>BMO assessment</h1>
					<p style={{ color: "tomato", height: "60px" }}>Search Restaurants</p>
				</div>

				<Form inline action="" method="get">
					{/* <Form.Label htmlFor="inlineFormInputName2" srOnly>
						Name
					</Form.Label> */}
					<Form.Control
						className="mb-2 mr-sm-2"
						id="inlineFormInputName2"
						placeholder="Type City"
						onChange={searchCity}
					/>
					<Form.Control
						className="mb-2 mr-sm-2"
						id="inlineFormInputName2"
						placeholder="Dinner OR Breakfast"
						onChange={searchRest}
					/>

					<Button type="submit" onClick={storeData} className="mb-2">
						Search
					</Button>
				</Form>
				<h1 style={{ height: "50px" }}></h1>

				{!empty && (
					<>
						{listings.map((item) => {
							return (
								<Card
									name={item.name}
									address={item.address}
									cuisine={item.cuisine}
								/>
							);
						})}
					</>
				)}

				{empty && (
					<>
						<p style={{ color: "red", fontSize: "15px", fontweight: "900px" }}>
							You search returns no results, please try again
						</p>
					</>
				)}
			</Container>

			<h1 style={{ height: "50px" }}></h1>
		</React.Fragment>
	);
}

export default App;
