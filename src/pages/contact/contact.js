import React from "react";
import Nav from "../../components/navbar/nav";
import Nav2 from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import Footer from "../../components/footer/footer";
export default function App() {
	return (
		<div className="main">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<Nav2 />
			<label htmlFor="navLinks__menu" className="navLinks__menu">

			</label>
			
			<Footer />
		</div>
	);
}

