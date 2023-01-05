import Slider from "react-slick";
import "./carousel.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";
import partner1 from "../../media/partner1.png";
import partner2 from "../../media/partner2.png";
import partner3 from "../../media/partner3.png";
import partner4 from "../../media/partner4.png";
import partner5 from "../../media/partner5.png";
import partner6 from "../../media/partner6.png";

export default function Rtl() {
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
			<h2>Partners</h2>
			<Slider {...settings}>
				<div className="carousel__elements">
					<a href="https://www.ark-logistics.uz/home">
						<img src={partner1} alt="partner1 img" />
					</a>
				</div>
				<div className="carousel__elements">
					<a href="https://www.ark-logistics.uz/home">
						<img src={partner2} alt="parner2 img" />
					</a>
				</div>
				<div className="carousel__elements">
					<a href="https://www.ark-logistics.uz/home">
						<img src={partner3} alt="partner3 img" />
					</a>
				</div>
				<div className="carousel__elements">
					<a href="https://www.ark-logistics.uz/home">
						<img src={partner4} alt="partner4 img" />
					</a>
				</div>
				<div className="carousel__elements">
					<a href="https://www.ark-logistics.uz/home">
						<img src={partner5} alt="partner5 img" />
					</a>
				</div>
				<div className="carousel__elements">
					<a href="https://www.ark-logistics.uz/home">
						<img src={partner6} alt="partner6 img" />
					</a>
				</div>
			</Slider>
		</div>
	);
}
