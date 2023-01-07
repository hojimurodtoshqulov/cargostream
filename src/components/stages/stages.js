import React from "react";
import "./stages.scss";
const Stages = ({ stagesData }) => {
	return (
		<div className="stages">
			<h2>Етапи работи</h2>
			{stagesData.map((item, index) => (
				<div
					className="stages-items"
					data-aos={item.aos}
					data-aos-duration="1000"
					key={item.key}
				>
					<h1 className="orderNumber">{item.orderNumber}</h1>
					<div className="texts">
						<h3 className="title">{item.title}</h3>
						<p className="description">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stages;
