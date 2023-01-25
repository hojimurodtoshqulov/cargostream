import React from "react";
import "./stages.scss";
import { useTranslation } from "react-i18next";
const Stages = ({ stagesData }) => {
const { t } = useTranslation();
const StagesData = [
	{
		aos: "fade-left",
		orderNumber: "01",
		title: t("stages1Title"),
		description: t("stages1Description"),
		key: 0,
	},
	{
		aos: "fade-right",
		orderNumber: "02",
		title: t("stages2Title"),
		description: t("stages2Description"),
		key: 1,
	},
	{
		aos: "fade-left",
		orderNumber: "03",
		title: t("stages3Title"),
		description: t("stages3Description"),
		key: 2,
	},
];
	return (
		<div className="stages">
			<h2>{t("stagesOfWorkTitle")}</h2>
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
