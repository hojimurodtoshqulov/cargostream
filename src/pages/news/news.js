import React from "react";
import "../../scss/main.scss";
import "./news.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/news.jpg";
import { cardsDataNews } from "../../components/cards/cardsData.js/cardsDataNews";
import { Cards } from "../../components/cards/cards";
const News = () => {
	return (
		<div className="main news">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"News"} />
			<h2 className="page__title">news</h2>
			<div className="wrapper">
				<Cards cardsData={cardsDataNews} />
			</div>
			<Footer />
		</div>
	);
};
export { News };
