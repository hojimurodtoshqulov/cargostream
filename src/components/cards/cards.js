import React, { useState } from "react";
import "./cards.scss";
import Button from "../button/button";
import Modal from "../modal/modal";
import { cardsDataNews } from "./cardsData.js/cardsDataNews";
const Cards = ({ cardsData, id }) => {
	const [idM, setIdM] = useState(0);

	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className="cards">
				{cardsData.map((item, index) => (
					<div
						className="card"
						data-aos="zoom-in-up"
						data-aos-duration="1000"
						key={index}
						onClick={() => setOpenModal(true)}
					>
						<img src={item.img} alt="" />
						<h3>{item.title}</h3>
						<p> {item.description} </p>
						<span
							onClick={() => {
								setOpenModal(true);
								setIdM(item.key);
							}}
						>
							<Button buttonTitle={item.btnTitle} />
							{idM ? console.log(idM) : ""}
						</span>
					</div>
				))}
			</div>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}
				modalData={cardsDataNews}
				id={idM ? idM : ''}
			/>
		</>
	);
};

export { Cards };
