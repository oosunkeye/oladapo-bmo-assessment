import React from "react";
import "./Card.css";

function Card({ name, address, cuisine }) {
	return (
		<div className="card-container">
			<div className="card-content">
				<div className="card-title">
					<h4 style={{ color: "red" }}>{name}</h4>
				</div>
				<div className="card-body">
					<p style={{ color: "dark", fontSize: "15px", fontweight: "900px" }}>
						{address}
					</p>

					<p>{cuisine}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
