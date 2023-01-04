import "./footer.scss";
import footerLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";

const Footer = () => {
	return (
		<footer>
			<img className="footer__logo" src={footerLogo} alt="logo img" />
			<CallLink />
			<MailLang />
		</footer>
	);
};

export default Footer;
