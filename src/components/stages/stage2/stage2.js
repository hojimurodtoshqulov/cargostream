import React from "react";
import { Stage2Data } from "./stage2Data/stage2Data";
import "../stages.scss";

const Stage2 = ({ props }) => {
	return (
		<div data-aos="fade-right" data-aos-duration="1000">
			{Stage2Data.map((item, index) => {
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

export default Stage2;
