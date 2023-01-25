import React, { Suspense } from "react";
import "../../scss/main.scss";
import "./news.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/news.jpg";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { newsData } from "./newsData/newsData";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const News = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
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
				<Nav onClick={(e) => handleClick(e)}/>
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
