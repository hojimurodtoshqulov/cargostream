import React, { useState, useEffect } from "react";
import navLogo from "../../media/logo.png";
import CallLink from "./callLinks/callLinks";
import engLogo from "../../media/UK-Union-Flag.png";
import ruLogo from "../../media/russianFlag.png";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
	const [navSize, setnavSize] = useState("100px");
	const [navColorBg, setnavColorBg] = useState("transparent");
	const [navColor, setnavColor] = useState("#000");
	const [navTextShadow, setnavTextShadow] = useState(
		"1px 1px 10px rgba(255, 255, 255, 0.545)"
	);
	const [navLinks, setnavLinks] = useState("block");
	const listenScrollEvent = () => {
		window.scrollY > 150
			? setnavColorBg("#181a1be5")
			: setnavColorBg("transparent");
		window.scrollY > 150 ? setnavSize("80px") : setnavSize("110px");
		window.scrollY > 150 ? setnavColor("#fff") : setnavColor("#000");
		window.scrollY > 150
			? setnavTextShadow("none")
			: setnavTextShadow("1px 1px 10px rgba(255, 255, 255, 0.545)");
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	return (
		<nav
			className="nav"
			style={{
				backgroundColor: navColorBg,
				height: navSize,
				transition: "all 0.8s",
			}}
		>
			<img className="nav__logo" src={navLogo} alt="nav logo" />
			<div className="nav__elements">
				{/* <h2
					className="nav__elements-title"
					style={{
						color: navColor,
						display: navElements,
					}}
				>
					таможня и логистика в узбекистане
				</h2>
				<div
					className="nav__elements-callsDiv"
					style={{
						color: navColor,
						display: navElements,
					}}
				>
					<CallLink />
				</div> */}
				<div
					className="nav__elements-linksDiv"
					style={{
						color: navColor,
						display: navLinks,
					}}
				>
					<ul
						className="nav__elements-linksDiv-ul"
						style={{
							textShadow: navTextShadow,
						}}
					>
						<li>
							<Link to="/">Главная</Link>
						</li>
						<li>
							<Link to="/company">О компани</Link>
						</li>
						<li>
							<Link to="/services">Услуги</Link>
						</li>
						<li>
							<Link to="/news">Новости</Link>
						</li>
						<li>
							<Link to="/contact">Контакт</Link>
						</li>
					</ul>
				</div>
				<div className="nav__elements-others">
					<a
						className="nav__elements-others-mail"
						href="mail:cargostreamuz@gmail.com"
						style={{
							color: navColor,
						}}
					>
						<i className="fa-solid fa-envelope"></i> cargostreamuz@gmail.com
					</a>
					<div className="nav__elements-others-language">
						<img
							className="nav__elements-others-language-img"
							src={engLogo}
							alt="eng logo"
						/>
						<img
							className="nav__elements-others-language-img"
							src={ruLogo}
							alt="ru logo"
						/>
					</div>
				</div>
			</div>
			<div className="nav__mobile">
				<div className="nav__mobile-elements">
					<p>
						<a
							href="tel:+998 93 543 38 11"
							style={{
								color: navColor,
							}}
						>
							<i className="fa-solid fa-phone"></i>
						</a>
					</p>
					<p>
						<a
							href="mail:cargostreamuz@gmail.com"
							style={{
								color: navColor,
							}}
						>
							<i className="fa-solid fa-envelope"></i>
						</a>
					</p>
					<p
						style={{
							color: navColor,
						}}
					>
						<label htmlFor="navLinks__menu">
							<i class="fa-solid fa-bars-staggered"></i>
						</label>
					</p>
				</div>
			</div>
		</nav>
	);
};
export { Nav };
