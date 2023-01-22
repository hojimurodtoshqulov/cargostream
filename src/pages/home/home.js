import React from "react";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import "./home.scss";
import ImageSlider from "../../components/imageSlider/imageSlider";
import { SliderData } from "../../components/imageSlider/sliderData/sliderData";
import OurCompany from "../../components/info/ourCompany/ourCompany";
import { OurCompanyData } from "../../components/info/ourCompany/ourCompanyData/ourCompanyData";
import OurServices from "../../components/info/ourServices/ourServices";
import { OurServicesData } from "../../components/info/ourServices/ourServicesData/ourServicesData";
import Stages from "../../components/stages/stages";
import { StagesData } from "../../components/stages/stagesData/stagesData";
import Submit from "../../components/submitApp/submit";
import "aos/dist/aos.css";
import Location from "../../components/location/location";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";
import { carouselData } from "../../components/carousel/carouselData/carouselData";
import { withNamespaces } from "react-i18next";
import i18n from "../../locales/i18n";
// import { ReactDOM } from "react-dom/client";
const Home = ({ t }) => {
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className="main">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<div className="slider_div">
				<ImageSlider slides={SliderData} />
			</div>
			<div className="infoDiv">
				<button onClick={() => changeLanguage("de")}>de</button>
				<button onClick={() => changeLanguage("en")}>en</button>
				{/* <h1>{t("title")}</h1> */}
				<OurCompany OurCompanyData={OurCompanyData} />
				<OurServices OurServicesData={OurServicesData} />
			</div>
			<div className="stages-elements-bg" id="submit"></div>
			<div id="submitDesctop" className="stages-elements">
				<div className="wrapper">
					<div
						className="stages-elements-col1"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<Stages stagesData={StagesData} />
					</div>
					<div
						className="stages-elements-col2"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<Submit />
					</div>
				</div>
			</div>
			<div className="partners-location">
				<Carousel carouselData={carouselData} />
				<Location />
			</div>
			<Footer />
		</div>
	);
};
export { Home };
export default withNamespaces();
