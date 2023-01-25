import React, { Suspense } from "react";
import "../../scss/main.scss";
import "./company.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import OurCompany from "../../components/info/ourCompany/ourCompany";
// import { OurCompanyData2 } from "../../components/info/ourCompany/ourCompanyData/ourCompanyData2";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import img2 from "../../media/transportation-and-logistics-of-container-3f334ac6.jpeg";

const Company = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const OurCompanyData2 = [
		{
			image:
				"https://skladi.uz/storage/app/media/cropped-images/transportnaya-logistika-0-0-0-0-1663569355.jpg",
			description: t("aboutCompanyDescription1"),
		},
		{
			image: img2,
			description: t("aboutCompanyDescription2"),
		},
	];

	return (
		<Suspense fallback="loading">
			<div className="main company">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} title={"Our company"} />
				<h2 className="page__title">{t("company")}</h2>
				<div className="infoDiv">
					<OurCompany OurCompanyData={OurCompanyData2} />
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { Company };
