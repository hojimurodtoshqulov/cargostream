import React from "react";
import "./stages.scss";
import Stage1 from "./stage1/stage1";
import { Stage1Data } from "./stage1/stage1Data/stage1Data";
import Stage2 from "./stage2/stage2";
import { Stage2Data } from "./stage2/stage2Data/stage2Data";
import Stage3 from "./stage3/stage3";
import { Stage3Data } from "./stage3/stage3Data/stage3Data";

const Stages = ({ props }) => {
	return (
		<div className="stages">
			<h2>Етапи работи</h2>
			<Stage1 stage1Data={Stage1Data} />
			<Stage2 stage2Data={Stage2Data} />
			<Stage3 stage3Data={Stage3Data} />
		</div>
	);
};

export default Stages;
