import "./footer.scss";
import footerLogo from "../../media/logo.png";
import CallLink from "../navbar/callLinks/callLinks";

const Footer = () => {
	return (
		<footer>
			<img className="footer__logo" src={footerLogo} alt="logo img" />
			<CallLink />
		</footer>
	);
};

export default Footer;
