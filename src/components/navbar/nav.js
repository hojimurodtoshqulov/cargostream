import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo.png";
import "./nav.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = ({onClick}) => {
	const [navSize, setnavSize] = useState("100px");
	const [navColorBg, setnavColorBg] = useState("transparent");
	const [navColor, setnavColor] = useState("#000");
	const [navTextShadow, setnavTextShadow] = useState(
		"1px 1px 10px rgba(255, 255, 255, 0.545)"
	);
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
	const { t } = useTranslation();
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	return (
		<Suspense fallback="loading">
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
					<div
						className="nav__elements-linksDiv"
						style={{
							color: navColor,
						}}
					>
						<ul
							className="nav__elements-linksDiv-ul"
							style={{
								textShadow: navTextShadow,
							}}
						>
							<li>
								<Link to="/">{t("home")}</Link>
							</li>
							<li>
								<Link to="/company">{t("company")}</Link>
							</li>
							<li>
								<Link to="/services">{t("service")}</Link>
							</li>
							<li>
								<Link to="/news">{t("news")}</Link>
							</li>
							<li>
								<Link to="/contact">{t("contact")}</Link>
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
							<button
								className="nav__elements-others-language-img eng"
								value={"en"}
								onClick={onClick}
								type="btn"
							></button>
							<button
								className="nav__elements-others-language-img rus"
								value={"ru"}
								onClick={onClick}
								type="btn"
							></button>
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
		</Suspense>
	);
};
export { Nav };
