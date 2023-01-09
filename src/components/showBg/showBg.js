import React from "react";
import "./showBg.scss"
const ShowBg = ({ bgImage }) => {
	return (
		<div className="showBg">
			<img className="showBg__img" src={bgImage} alt="show caseImg" />
		</div>
	);
};

export default ShowBg;
