import React from "react";
import {Nav} from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/transportation-and-logistics-of-container-3f334ac6.jpeg";
import Stages from "../../components/stages/stages";
import Submit from "../../components/submitApp/submit";
import Aos from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="contact">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"contact"} />
			<div
				id="submitDesctop"
				className="stages-elements"
				data-aos="fade-left"
				data-aos-duration="900"
			>
				<div className="wrapper">
					<div className="stages-elements-col1">
						<Stages />
					</div>
					<div className="stages-elements-col2">
						<Submit />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export {Contact}