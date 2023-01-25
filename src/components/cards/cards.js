import React, { useState } from "react";
import "./cards.scss";
import Button from "../button/button";
import { Link } from "react-router-dom";
import serviceCardImg1 from "../../media/transportation-and-logistics-of-container-3f334ac6.jpeg";
import serviceCardImg2 from "../../media/news.jpg";
import serviceCardImg3 from "../../media/shipping-rates-are-finally-falling-1428282157-standard-1536x1536.jpg";
import serviceCardImg4 from "../../media/customs-clearance.png";
import { useTranslation } from "react-i18next";
const Cards = ({ id }) => {
	const [idM, setIdM] = useState(0);
	const { t } = useTranslation();
	const cardsData = [
		{
			img: serviceCardImg1,
			title: t("servicesAirFreightTitle"),
			description: t("servicesAirFreightDescription"),
			btnTitle: t("servicesBtnTitle"),
			link: "/services/airFreight",
			key: "01",
		},
		{
			img: serviceCardImg2,
			title: t("servicesRoadFreightTitle"),
			description: t("servicesRoadFreightDescription"),
			btnTitle: t("servicesBtnTitle"),
			link: "/services/roadFreight",
			key: "02",
		},
		{
			img: serviceCardImg3,
			title: t("servicesShipFreightTitle"),
			description: t("servicesShipFreightDescription"),
			btnTitle: t("servicesBtnTitle"),
			link: "/services/shipFreight",
			key: "03",
		},
		{
			img: serviceCardImg4,
			title: t("servicesCustomsTitle"),
			description: t("servicesCustomsDescription"),
			btnTitle: t("servicesBtnTitle"),
			link: "/services/customs",
			key: "04",
		},
	];
	return (
		<>
			<div className="cards">
				{cardsData.map((item, index) => (
					<div
						className="card"
						data-aos="zoom-in-up"
						data-aos-duration="1000"
						key={index}
					>
						<img src={item.img} alt="" />
						<h3>{item.title}</h3>
						<p> {item.description.slice(0, 100)} ... </p>
						<span
							onClick={() => {
								setIdM(item.key);
							}}
						>
							<Link to={item.link}>
								<Button buttonTitle={item.btnTitle} />
							</Link>
							{idM ? console.log(idM) : ""}
						</span>
					</div>
				))}
			</div>
		</>
	);
};

export { Cards };
