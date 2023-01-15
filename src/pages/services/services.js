import React from "react";
import "../../scss/main.scss";
import "./services.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/news12.jpg";
import { Cards } from "../../components/cards/cards";
import { cardsData } from "../../components/cards/cardsData/cardsData";
// import ModalComponent from "../../components/modal/modal";
const Services = () => {
	return (
		<div className="main services">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Services"} />
			<h2 className="page__title">Услуги</h2>
			<div className="wrapper">
				<Cards cardsData={cardsData} />
			</div>
			{/* <ModalComponent /> */}
			<Footer />
		</div>
	);
};
export { Services };
