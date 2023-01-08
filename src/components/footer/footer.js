import "./footer.scss";
import footerLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";

const Footer = () => {
	return (
		<footer>
			<img className="footer__logo" src={footerLogo} alt="logo img" />
			<CallLink />
			<ul>
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
			<MailLang />
		</footer>
	);
};

export default Footer;
