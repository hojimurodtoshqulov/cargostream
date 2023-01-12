import React from 'react';
import "insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import OurCompany from "../../components/info/ourCompany/ourCompany";
import { OurCompanyData2 } from "../../components/info/ourCompany/ourCompanyData/ourCompanyData2";
import OurServices from "../../components/info/ourServices/ourServices";
import { OurServicesData2 } from "../../components/info/ourServices/ourServicesData/ourServicesData2";
const InsidePages = () => {
	return (
		<div className="main company">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Our company"} />
			<h2 className="page__title">our company</h2>

			<Footer />
		</div>
	);
};
export { InsidePages };
