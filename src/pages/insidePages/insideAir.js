import React, { Suspense } from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
// import { cardsData } from "../../components/cards/cardsData/cardsData";
import img1 from "../../media/transportation-and-logistics-of-container-3f334ac6.jpeg";
import InsideCategories from "./insideCategories/insideCategories";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const InsideAir = () => {
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
					{t("service")} <span>/ {t("servicesAirFreightTitle")}</span>
				</h2>
				<div className="inside__elements wrapper">
					<div className="inside__elements-col1">
						<h3>{t("infoService")}</h3>
						<InsideCategories />
					</div>
					<div className="inside__elements-col2">
						<div className="inside__elements-col2-elements">
							<img src={img1} alt="inside img" />
							<p>
								{t("servicesAirFreightDescription")}
								<p>{t("servicesAirFreightDescription1")}</p>
								<p>{t("servicesAirFreightDescription2")}</p>
								<p>{t("servicesAirFreightDescription3")}</p>
								<p>{t("servicesAirFreightDescription4")}</p>
								<p>{t("servicesAirFreightDescription5")}</p>
								<p>{t("servicesAirFreightDescription6")}</p>
								<p>{t("servicesAirFreightDescription7")}</p>
								<p>{t("servicesAirFreightDescription8")}</p>
								<p>{t("servicesAirFreightDescription9")}</p>
								<p>{t("servicesAirFreightDescription10")}</p>
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { InsideAir };
