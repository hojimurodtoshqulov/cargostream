import React, { useState } from "react";
import "./cards.scss";
import Button from "../button/button";
import {Link} from "react-router-dom";
const Cards = ({ cardsData, id }) => {
	const [idM, setIdM] = useState(0);
	return (
		<>
			<div className="cards">
				{cardsData.map((item, index) => (
					<div
						className="card"
						data-aos="zoom-in-up"
						data-aos-duration="1000"
						key={index}
					>
						<img src={item.img} alt="" />
						<h3>{item.title}</h3>
						<p> {item.description.slice(0, 100)} ... </p>
						<span
							onClick={() => {
								setIdM(item.key);
							}}
						>
							<Link to={item.link}><Button buttonTitle={item.btnTitle} /></Link>
							{idM ? console.log(idM) : ""}
						</span>
					</div>
				))}
			</div>
		</>
	);
};

export { Cards };
