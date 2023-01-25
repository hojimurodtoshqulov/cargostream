import React, { Suspense } from "react";
import engLogo from "../../../media/UK-Union-Flag.png";
import ruLogo from "../../../media/russianFlag.png";
import "../nav.scss";
import i18next from "i18next";
const MailLang = ({ onClick }) => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	return (
		<Suspense fallback="loading">
			<div onClick={(e) => handleClick(e)} className="nav__otherElements">
				<a
					className="nav__otherElements-mail"
					href="mail:cargostreamuz@gmail.com"
				>
					<i className="fa-solid fa-envelope"></i> cargostreamuz@gmail.com
				</a>
				<div
					onClick={(e) => handleClick(e)}
					className="nav__otherElements__language"
				>
					<button
						className="nav__otherElements__language-img eng"
						value={"en"}
						onClick={onClick}
						type="btn"
					>
					</button>
					<button
						className="nav__otherElements__language-img rus"
						value={"ru"}
						onClick={onClick}
						type="btn"
					>
					</button>
				</div>
			</div>
		</Suspense>
	);
};

export default MailLang;
