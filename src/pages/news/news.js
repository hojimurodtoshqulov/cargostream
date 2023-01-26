import React, { Suspense } from "react";
import "../../scss/main.scss";
import "./news.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/truck-intergrations-1400.jpeg";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useRef } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import serviceCardImg1 from "../../media/transportation-and-logistics-of-container-3f334ac6.jpeg";
import serviceCardImg2 from "../../media/news.jpg";
import serviceCardImg3 from "../../media/shipping-rates-are-finally-falling-1428282157-standard-1536x1536.jpg";
import serviceCardImg4 from "../../media/news12.jpg";
import serviceCardImg5 from "../../media/transportnaya-logistika.jpg";
import serviceCardImg6 from "../../media/pat-whelen-IcHxE93NoB8-unsplash.jpg";
const News = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const newsData = [
		{
			img: serviceCardImg1,
			title: t("newsTitle1"),
			description:t("newsTitle1Description"),
			aos: "fade-right",
			key: "01",
		},
		{
			img: serviceCardImg2,
			title: t("newsTitle2"),
			description:
				t("newsTitle2Description"),
			aos: "fade-left",
			key: "02",
		},
		{
			img: serviceCardImg3,
			title: t("newsTitle3"),
			description:
				t("newsTitle3Description"),
			aos: "fade-right",
			key: "03",
		},
		{
			img: serviceCardImg4,
			title: t("newsTitle4"),
			description:
				t("newsTitle4Description"),
			aos: "fade-left",
			key: "04",
		},
		{
			img: serviceCardImg5,
			title: t("newsTitle5"),
			description:
				t("newsTitle5Description"),
			aos: "fade-right",
			key: "05",
		},
		{
			img: serviceCardImg6,
			title: t("newsTitle6"),
			description:
				t("newsTitle6Description"),
			aos: "fade-left",
			key: "06",
		},
	];

	const windowSize = useRef([window.innerWidth, window.innerHeight]);
	const [num, setNum] = useState(4);
	const listenScrollEvent = () => {
		if (windowSize.current[0] < 375) {
			setNum(2);
		} else if (windowSize.current[0] < 768) {
			setNum(3);
		} else if (windowSize.current[0] < 1920) {
			setNum(4);
		} else {
			setNum(6);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: num,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		rtl: true,
	};

	return (
		<Suspense fallback="loading">
			<div className="main news">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} title={"News"} />
				<h2 className="page__title">{t("news")}</h2>
				<div
					className="carousel wrapper"
					data-aos="zoom-in-up"
					data-aos-duration="1000"
				>
					<Slider {...settings}>
						{newsData.map((data) => (
							<div className="card" key={data.key} data-aos={data.aos}>
								<div className="card__elements">
									<img src={data.img} alt="" />
									<h3>{data.title}</h3>
									<p> {data.description} </p>
								</div>
							</div>
						))}
					</Slider>
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { News };
