import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./carousel.scss";
import { useTranslation } from "react-i18next";
export default function Carousel({ carouselData }) {
	const { t } = useTranslation();
	const windowSize = useRef([window.innerWidth, window.innerHeight]);
	const [num, setNum] = useState(5);
	const listenScrollEvent = () => {
		if (windowSize.current[0] < 375) {
			setNum(2);
		} else if (windowSize.current[0] < 576) {
			setNum(3);
		} else if (windowSize.current[0] < 992) {
			setNum(4);
		} else if (windowSize.current[0] < 1201) {
			setNum(5);
		} else if (windowSize.current[0] < 1920) {
			setNum(5);
		} else {
			setNum(6);
		}
	};
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: num,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		rtl: true,
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	return (
		<div
			data-aos="zoom-in-up"
			data-aos-duration="2000"
			className="carousel wrapper"
		>
			<h2>{t("partners")}</h2>
			<Slider {...settings}>
				{carouselData.map((item, index) => (
					<div
						className="carousel__elements"
						key={index}
						data-aos={item.aos}
						data-aos-duration="2000"
					>
						<a href={item.url}>
							<img src={item.image} alt="partner img" />
						</a>
					</div>
				))}
			</Slider>
		</div>
	);
}
