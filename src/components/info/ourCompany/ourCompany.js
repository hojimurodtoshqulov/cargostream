import React from "react";
import "../info.scss";
import Button from "../../button/button";
import { OurCompanyData } from "./ourCompanyData/ourCompanyData";
const OurCompany = ({ infoData }) => {
	return (
		<div className="info" data-aos="zoom-in-up" data-aos-duration="2000">
			<div className="wrapper">
				{OurCompanyData.map((item, index) => {
					return (
						<div key={index}>
							<div className="info-elements" key={index}>
								<h2 className="info-elements-mb-title">{item.title}</h2>
								<div className="info-img-div">
									<img src={item.image} alt="company" />
								</div>
								<div className="info-titles-div">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
									<Button buttonTitle={item.buttonTitle} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurCompany;
