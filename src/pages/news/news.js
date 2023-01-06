import React from "react";
import {Nav} from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/news.jpg";
const News = () => {
	return (
		<div className="main">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"News"} />
			<Footer />
		</div>
	);
};
export {News}