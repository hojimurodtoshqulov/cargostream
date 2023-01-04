import React, { useState } from "react";
import { SliderData } from "./sliderData/sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./imageSlider.scss";
import Button from "../button/button";
import { useEffect } from "react";
const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	let [num, setNum] = useState(0);
	const length = slides.length;
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	// ----------------------setinterval------------------------------ //
	const Time1 = useEffect(() => {
		const interval = setInterval(() => {
			setNum((num = -1));
		}, 20000);
		return () => clearInterval(interval);
	}, []);
	const Time2 = useEffect(() => {
		const interval = setInterval(() => {
			setNum((num = num + 1));
			setCurrent(current === length - 1 ? 0 : current + num);
		}, 5000);
		return () => clearInterval(interval);
	}, []);
	// ---------------------------------------------------- //
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="slider">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
			{SliderData.map((slide, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<>
								<img src={slide.image} alt="travel image" className="image" />
								<div className="slide-elements">
									<p className="description">{slide.description}</p>
									<h1 className="title">{slide.title}</h1>
									<a href="#submitDesctop" id="submit_desctop">
										<Button buttonTitle={slide.buttonTitle} />
									</a>
									<a href="#submitMobile" id="submit_mobile">
										<Button buttonTitle={slide.buttonTitle} />
									</a>
								</div>
								<div className="left-arrow-div" onClick={prevSlide}></div>
								<div className="right-arrow-div" onClick={nextSlide}></div>
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};
export default ImageSlider;