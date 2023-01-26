import React, { Suspense } from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/auto.jpg";
// import { cardsData } from "../../components/cards/cardsData/cardsData";
import roadFreightImg from "../../media/news.jpg";
import InsideCategories from "./insideCategories/insideCategories";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const InsideRoad = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	return (
		<Suspense fallback="loading">
			<div className="main inside">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} title={"Our company"} />
				<h2 className="page__title">
					{t("service")} <span>/ {t("servicesRoadFreightTitle")}</span>
				</h2>
				<div className="inside__elements wrapper">
					<div className="inside__elements-col1">
						<h3>{t("infoService")}</h3>
						<InsideCategories />
					</div>
					<div className="inside__elements-col2">
						<div className="inside__elements-col2-elements">
							<img src={roadFreightImg} alt="inside img" />
							<p>{t("servicesRoadFreightDescription")}</p>
							<p>{t("servicesRoadFreightDescription2")}</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { InsideRoad };
