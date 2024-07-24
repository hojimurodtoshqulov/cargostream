import React, { Suspense } from "react";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/contact-us.jpg";
import Stages from "../../components/stages/stages";
import Submit from "../../components/submitApp/submit";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./contact.scss";
import Location from "../../components/location/location";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
const StagesDataCont = [
	{
		aos: "fade-left",
		icon: <i class="fa-solid fa-location-dot"></i>,
		titleCont: t("contactAddress"),
		descriptionCont: t("contactAddressDescription"),
		key: 0,
	},
	{
		aos: "fade-right",
		icon: <i className="fa-solid fa-phone"></i>,
		titleCont: t("contactPhone"),
		// descriptionCont: <a href="tel:+998 93 543 38 11">+998 93 543 38 11</a>,
		// descriptionCont2: <a href="tel:+998 97 758 25 00">+998 97 758 25 00</a>,
		key: 1,
	},
	{
		aos: "fade-left",
		icon: <i className="fa-solid fa-envelope"></i>,
		titleCont: t("contactEmail"),
		// descriptionCont: <a href="cargostreamuz@gmail.com">cargostreamuz@gmail.com</a>,
		key: 2,
	},
	{
		aos: "fade-right",
		tg: <a href=""><i class="fa-brands fa-telegram"></i></a>,
		ins: <a href=""><i class="fa-brands fa-instagram"></i></a>,
		fb: <a href=""><i class="fa-brands fa-facebook"></i></a>,
		key: 3,
	},
];
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	const successSubmit = (success) => success;

	return (
		<Suspense fallback="loading">
			<div className="contact main">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} />
				<h2 className="page__title">{t("contact")}</h2>
				<div
					id="submitDesctop"
					className="stages-elements"
					data-aos="fade-left"
					data-aos-duration="900"
				>
					<div className="wrapper">
						<div
							className="stages-elements-col1"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<Stages stagesData={StagesDataCont} />
						</div>
						<div
							className="stages-elements-col2"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<Submit success={successSubmit}/>
						</div>
					</div>
				</div>
				<Location />
				<Footer />
			</div>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
		</Suspense>
	);
};
export { Contact };
