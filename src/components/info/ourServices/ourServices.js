import React from "react";
import "../info.scss";
import Button from "../../button/button";
import { Link } from "react-router-dom";
const OurServices = ({ OurServicesData }) => {
	return (
		<div className="info" data-aos="zoom-in-up" data-aos-duration="2000">
			<div className="wrapper">
				{OurServicesData.map((item, index) => {
					return (
						<div key={index}>
							<div className="info-elements" key={index}>
								<h2 className="info-elements-mb-title">{item.title}</h2>
								<div className="info-img-div info-img-div2">
									<img src={item.image} alt="services" />
								</div>
								<div className="info-titles-div info-titles-div2">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
									<Link to="/services">
										<Button buttonTitle={item.buttonTitle} />
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurServices;
