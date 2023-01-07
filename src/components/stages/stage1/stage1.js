import React from "react";
import { Stage1Data } from "./stage1Data/stage1Data";
import "../stages.scss";

const Stage1 = ({ props }) => {
	return (
		<div data-aos="fade-left" data-aos-duration="1000">
			{Stage1Data.map((item, index) => {
				return (
					<div className="stages-items" key={item.key}>
						<h1 className="orderNumber">{item.orderNumber}</h1>
						<div className="texts">
							<h3 className="title">{item.title}</h3>
							<p className="description">{item.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stage1;
