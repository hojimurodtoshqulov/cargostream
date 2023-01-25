import React from "react";
import "./footer.scss";
import footerLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";
import i18next from "i18next";
const Footer = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	return (
		<footer>
			<img className="footer__logo" src={footerLogo} alt="logo img" />
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
		</footer>
	);
};

export default Footer;
