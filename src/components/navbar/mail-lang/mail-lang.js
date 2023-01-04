import engLogo from "../../../media/UK-Union-Flag.png";
import ruLogo from "../../../media/russianFlag.png";
import "../nav.scss"
const MailLang = () => {
	return (
		<div className="nav__otherElements">
			<a className="nav__otherElements-mail" href="mail:cargostreamuz@gmail.com">
				<i className="fa-solid fa-envelope"></i> cargostreamuz@gmail.com
			</a>
			<div className="nav__otherElements__language">
				<img
					className="nav__otherElements__language-img"
					src={engLogo}
					alt="eng logo"
				/>
				<img
					className="nav__otherElements__language-img"
					src={ruLogo}
					alt="ru logo"
				/>
			</div>
		</div>
	);
};

export default MailLang;
