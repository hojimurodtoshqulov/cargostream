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
					Home
				</li>
				<li>
					<i class="fa-solid fa-building"></i>
					О компани
				</li>
				<li>
					{/* <i class="fa-brands fa-servicestack"></i> */}
					<i class="fa-solid fa-dragon"></i>
					Услуги
				</li>
				<li>
					<i class="fa-solid fa-newspaper"></i>
					Новости 
				</li>
				<li>
					<i class="fa-solid fa-address-book"></i>
					Контакт
				</li>
			</ul>
			<div className="nav__links-mobileElements">
				<CallLink />
				<MailLang />
			</div>
		</div>
	);
}
