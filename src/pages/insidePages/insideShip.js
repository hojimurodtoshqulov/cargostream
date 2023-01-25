import React, { Suspense } from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
// import { cardsData } from "../../components/cards/cardsData/cardsData";
import shipFreightImg from "../../media/shipping-rates-are-finally-falling-1428282157-standard-1536x1536.jpg";
import InsideCategories from "./insideCategories/insideCategories";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const InsideShip = () => {
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
					{t("service")} <span>/ {t("servicesShipFreightTitle")} </span>
				</h2>
				<div className="inside__elements wrapper">
					<div className="inside__elements-col1">
						<h3>{t("infoService")}</h3>
						<InsideCategories />
					</div>
					<div className="inside__elements-col2">
						<div className="inside__elements-col2-elements">
							<img src={shipFreightImg} alt="inside img" />
							<p>
								{t("servicesShipFreightDescription")}
								<p>{t("servicesShipFreightDescription1")}</p>
								<p>{t("servicesShipFreightDescription2")}</p>
								<p>{t("servicesShipFreightDescription3")}</p>
								<p>{t("servicesShipFreightDescription4")}</p>
								<p>{t("servicesShipFreightDescription5")}</p>
								<p>{t("servicesShipFreightDescription6")}</p>
								<p>{t("servicesShipFreightDescription7")}</p>
								<p>{t("servicesShipFreightDescription8")}</p>
								<p>{t("servicesShipFreightDescription9")}</p>
								<p>{t("servicesShipFreightDescription10")}</p>
								<p>{t("servicesShipFreightDescription11")}</p>
								<p>{t("servicesShipFreightDescription12")}</p>
								<p>{t("servicesShipFreightDescription13")}</p>
								<p>{t("servicesShipFreightDescription14")}</p>
								<p>{t("servicesShipFreightDescription15")}</p>
								<p>{t("servicesShipFreightDescription16")}</p>
								<p>{t("servicesShipFreightDescription17")}</p>
								<p>{t("servicesShipFreightDescription18")}</p>
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { InsideShip };
