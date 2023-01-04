import React from "react";
import "./partners.scss";
import { partnersData } from "./partnersData/partnersData";

const Partners = ({ props }) => {
	return (
		<div className="wrapper" data-aos="zoom-in-up" data-aos-duration="1500">
				<h2>Partners</h2>
			<div className="partners" >
				{/* <img src={partnersImg1} alt="" /> */}
				{partnersData.map((item, index) => {
					return (
						<div key={index}>
							<a href={item.url} >
								<img src={item.image} alt="partnersImage" />
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Partners;
