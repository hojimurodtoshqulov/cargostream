import React from "react";
import "./navbarLinks.scss";
import navLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";
import { Link } from "react-router-dom";
export default function NavbarLinks(params) {
	return (
		<div className="nav__links">
			<img className="nav__logo" src={navLogo} alt="nav logo" />
			<h2 className="nav__links-title">таможня и логистика в узбекистане</h2>
			<ul>
				<li>
					<Link to="/">
						<i class="fa-solid fa-house"></i>
						Главная
					</Link>
				</li>
				<li>
					<Link to="/company">
						<i class="fa-solid fa-building"></i>О компани
					</Link>
				</li>
				<li>
					<Link to="/services">
						<i class="fa-solid fa-dragon"></i>
						Услуги
					</Link>
				</li>
				<li>
					<Link to="/news">
						<i class="fa-solid fa-newspaper"></i>
						Новости
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<i class="fa-solid fa-address-book"></i>
						Контакт
					</Link>
				</li>
			</ul>
			<div className="nav__links-mobileElements">
				<CallLink />
				<MailLang />
			</div>
		</div>
	);
}
