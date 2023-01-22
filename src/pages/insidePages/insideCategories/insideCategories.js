import React from "react";
import { Link } from "react-router-dom";
const InsideCategories = ({ cardsData }) => {
	return (
		<>
			{cardsData.map((item, index) => (
				<Link to={item.link} className="link">
					<div className="inside__elements-col1-categories" key={index}>
						<img src={item.img} alt="inside img" />
						<h4>{item.title}</h4>
					</div>
				</Link>
			))}
		</>
	);
};

export default InsideCategories;
