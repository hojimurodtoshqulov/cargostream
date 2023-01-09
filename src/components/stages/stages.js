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
					<h1 className="orderNumber">
						{item.orderNumber ?? item.icon} {item.tg} {item.ins}
						{item.fb}
					</h1>
					<div className="texts">
						<h3 className="title">{item.title ?? item.titleCont}</h3>
						<p className="description">
							{item.description ?? item.descriptionCont}
							<br />
							{item.descriptionCont2}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stages;
