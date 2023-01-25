import React from "react";
import "./navbarLinks.scss";
import navLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export default function NavbarLinks({params}) {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	return (
		<div className="nav__links">
			<img className="nav__logo" src={navLogo} alt="nav logo" />
			<h2 className="nav__links-title">{t("mobileMenuTitle")}</h2>
			<ul className="nav__links-menu">
				<li>
					<Link to="/">
						<i class="fa-solid fa-house"></i>
						{t("home")}
					</Link>
				</li>
				<li>
					<Link to="/company">
						<i className="fa-solid fa-building"></i>{t("company")}
					</Link>
				</li>
				<li>
					<Link to="/services">
						<i className="fa-solid fa-dragon"></i>
						{t("service")}
					</Link>
				</li>
				<li>
					<Link to="/news">
						<i className="fa-solid fa-newspaper"></i>
						{t("news")}
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<i className="fa-solid fa-address-book"></i>
						{t("contact")}
					</Link>
				</li>
			</ul>
			<div className="nav__links-mobileElements">
				<CallLink />
				<ul className="nav__links-mobileElements-media">
					<li>
						<a href="">
							<i class="fa-brands fa-telegram"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i class="fa-brands fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i class="fa-brands fa-facebook"></i>
						</a>
					</li>
				</ul>
				<MailLang onClick={(e) => handleClick(e)} />
			</div>
		</div>
	);
}
