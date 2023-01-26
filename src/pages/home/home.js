import React, { Suspense } from "react";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import "./home.scss";
import ImageSlider from "../../components/imageSlider/imageSlider";
import { SliderData } from "../../components/imageSlider/sliderData/sliderData";
import OurCompany from "../../components/info/ourCompany/ourCompany";
import OurServices from "../../components/info/ourServices/ourServices";
import Stages from "../../components/stages/stages";
import Submit from "../../components/submitApp/submit";
import "aos/dist/aos.css";
import Location from "../../components/location/location";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";
import { carouselData } from "../../components/carousel/carouselData/carouselData";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import imgCompany from "../../media/Logistics-Companies.jpg"
const Home = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const { t } = useTranslation();
	const OurCompanyData = [
		{
			image: imgCompany,
			title: t("infoCompany"),
			description:t("infoCompanyDescription"),
			buttonTitle: t("infoBtn"),
		},
	];
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
		<Suspense fallback="loading">
			<div className="main home">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<div className="slider_div">
					<ImageSlider slides={SliderData} />
				</div>
				<div className="infoDiv">
					{/* <button onClick={() => changeLanguage("de")}>de</button>
				<button onClick={() => changeLanguage("en")}>en</button> */}
					{/* <h1>{t("title")}</h1> */}
					<OurCompany OurCompanyData={OurCompanyData}/>
					<OurServices />
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
		</Suspense>
	);
};
export { Home };
