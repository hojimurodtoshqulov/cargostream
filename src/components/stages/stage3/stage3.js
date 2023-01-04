import React from "react";
import { Stage3Data } from "./stage3Data/stage3Data";
import "../stages.scss";

const Stage3 = ({ props }) => {
	return (
		<div data-aos="fade-left" data-aos-duration="1000">
			{Stage3Data.map((item, index) => {
				return (
					<div className="stages-items" key={item.key}>
						<h1 className="orderNumber" id="submitMobile">
							{item.orderNumber}
						</h1>
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
export default Stage3;
