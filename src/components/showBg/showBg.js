import React from "react";
import "./showBg.scss"
const ShowBg = ({ bgImage, title }) => {
	return (
		<div className="showBg">
			<img className="showBg__img" src={bgImage} alt="show caseImg" />
			<h2 className="showBg__title">{title}</h2>
		</div>
	);
};

export default ShowBg;
