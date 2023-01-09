import React from "react";
import "./cards.scss";
import { Link } from "react-router-dom";
import Button from "../button/button";
const Cards = ({ cardsData }) => {
	return (
		<div className="cards">
			{cardsData.map((item, index) => (
				<div className="card" data-aos="zoom-in-up" data-aos-duration="1000" key={index}>
					<img src={item.img} alt="" />
					<h3>{item.title}</h3>
					<p> {item.description} </p>
					<Link to="/">
						<Button buttonTitle={item.btnTitle}/>
					</Link>
				</div>
			))}
		</div>
	);
};

export { Cards };
