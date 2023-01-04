import React from "react";
import "../info.scss";
// import { Button, Modal } from "antd";
import { useState } from "react";
import Button from "../../button/button";
import { OurCompanyData } from "./ourCompanyData/ourCompanyData";
const OurCompany = ({ infoData }) => {
	const [modal2Open, setModal2Open] = useState(false);
	return (
		<div className="info" data-aos="zoom-in-up" data-aos-duration="2000">
			<div className="wrapper">
				{OurCompanyData.map((item, index) => {
					// console.log(item);
					return (
						<div key={index}>
							<div className="info-elements" key={index}>
								<h2 className="info-elements-mb-title">{item.title}</h2>
								<div className="info-img-div">
									<img src={item.image} alt="image" />
								</div>
								<div className="info-titles-div">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
									{/* <button>{item.buttonTitle}</button> */}
									<Button buttonTitle={item.buttonTitle} />
									{/* <Button
										className="button"
										onClick={() => (setModal2Open(true))}
									>
										{item.buttonTitle}
									</Button>
									<Modal
										className="modal"
										title="Vertically centered modal dialog"
										centered
										open={modal2Open}
										onOk={() => setModal2Open(false)}
										onCancel={() => setModal2Open(false)}
									>
										{"asfadvdeamvoa vao"}
									</Modal> */}
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
