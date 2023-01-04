import React from "react";
import "./navbarLinks.scss";
import navLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";

export default function navbarLinks(params) {
	return (
		<div className="nav__links">
			<img className="nav__logo" src={navLogo} alt="nav logo" />
			<h2 className="nav__links-title">таможня и логистика в узбекистане</h2>
			<ul>
				<li>
					<i class="fa-solid fa-house"></i>
					<a href="">Home</a>
				</li>
				<li>
					<i class="fa-solid fa-building"></i>
					<a href="">О компани</a>
				</li>
				<li>
					{/* <i class="fa-brands fa-servicestack"></i> */}
					<i class="fa-solid fa-dragon"></i>
					<a href="">Услуги</a>
				</li>
				<li>
					<i class="fa-solid fa-newspaper"></i>
					<a href="">Новости </a>
				</li>
				<li>
					<i class="fa-solid fa-address-book"></i>
					<a href="">Контакт</a>
				</li>
			</ul>
			<div className="nav__links-mobileElements">
				<CallLink />
				<MailLang />
			</div>
		</div>
	);
}
