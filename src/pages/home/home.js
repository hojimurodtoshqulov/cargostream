import React from "react";
import Nav from "../../components/navbar/nav";
import Nav2 from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import "./home.scss";
import ImageSlider from "../../components/imageSlider/imageSlider";
import { SliderData } from "../../components/imageSlider/sliderData/sliderData";
import OurCompany from "../../components/info/ourCompany/ourCompany";
import { OurCompanyData } from "../../components/info/ourCompany/ourCompanyData/ourCompanyData";
import OurServices from "../../components/info/ourServices/ourServices";
import { OurServicesData } from "../../components/info/ourServices/ourServicesData/ourServicesData";
import Stages from "../../components/stages/stages";
import Submit from "../../components/submitApp/submit";
import Aos from "aos";
import "aos/dist/aos.css";
import Location from "../../components/location/location";
import Footer from "../../components/footer/footer";
import Rtl from "../../components/carousel/carousel";
import { useEffect } from "react";
export default function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="main">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<Nav2 />
			<label htmlFor="navLinks__menu" className="navLinks__menu">
				asfwrhewhgrw
			</label>
			<div className="slider_div">
				<ImageSlider slides={SliderData} />
			</div>
			<div className="infoDiv">
				{/* <button onClick={handleClick}>Scroll to element</button> */}
				<OurCompany OurCompanyData={OurCompanyData} />
				<OurServices OurServicesData={OurServicesData} />
			</div>
			<div className="stages-elements-bg" id="submit"></div>
			<div
				id="submitDesctop"
				className="stages-elements"
				data-aos="fade-left"
				data-aos-duration="900"
			>
				<div className="wrapper">
					<div className="stages-elements-col1">
						<Stages />
					</div>
					<div className="stages-elements-col2">
						<Submit />
					</div>
				</div>
			</div>
			<div className="partners-location">
				<Rtl />
				<Location />
			</div>
			<Footer />
		</div>
	);
}

// export default function App() {

//   return (
//     <div>
//       <button onClick={handleClick}>Scroll to element</button>

//       <div style={{height: '155rem'}} />

//       <div ref={ref}>Some content here</div>

//       <div style={{height: '155rem'}} />
//     </div>
//   );
// }