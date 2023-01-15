import React from "react";
import "insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import { cardsData } from "../../components/cards/cardsData/cardsData";
const InsidePages = () => {
	return (
		<div className="main company">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Our company"} />
			<h2 className="page__title">
				servises / <span>road</span>
			</h2>
			<div className="inside__elements">
				<div className="inside__elements-col1">
					<h3>OUR SERVICES</h3>
					{cardsData.map(() => (
						<div className="services__categories">
							<img src="" alt="" />
							<h4></h4>
						</div>
					))}
				</div>
				<div className="inside__elements-col2">
					<h1></h1>
					<img src="" alt="" />
					<p></p>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export { InsidePages };
