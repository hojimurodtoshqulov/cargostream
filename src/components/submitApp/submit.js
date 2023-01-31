import React, { useState } from "react";
import Button from "../button/button";
import "./submit.scss";
import { useTranslation } from "react-i18next";
// import { Axios } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Submit = ({ onClose }) => {
	// open={openModal} onClose={() => setOpenModal(false)}
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	const url = "https://cargo-stream.herokuapp.com/email/send";
	const [data, setData] = useState({
		phone: "",
		price: "",
		product: "",
		comment: "",
	});
	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}
	const submit = async (e) => {
		e.preventDefault();
		await axios
			.post(url, {
				phone: data.phone,
				price: data.price,
				product: data.product,
				comment: data.comment,
			})
			.then((res) => {
				console.log(res.data);
			});
		navigate("/");
		setData({
			phone: "",
			price: "",
			product: "",
			comment: "",
		});
		setOpenModal(false);
		onClose(openModal);
	};
	const { t } = useTranslation();
	return (
		<div className="submit">
			<h2>{t("submitTitle")}</h2>
			<p>{t("submitDescription")}</p>
			<form action="" className="form" onSubmit={(e) => submit(e)}>
				<input
					className="input-tell form-control"
					onChange={(e) => handle(e)}
					id="phone"
					value={data.phone}
					type="text"
					placeholder={t("submitPhone")}
					required
				/>
				<input
					className="input-price form-control"
					onChange={(e) => handle(e)}
					id="price"
					value={data.price}
					type="text"
					placeholder={t("submitPrice")}
					required
				/>
				<input
					className="input-name form-control"
					onChange={(e) => handle(e)}
					id="product"
					value={data.product}
					type="text"
					placeholder={t("submitProduct")}
					required
				/>
				<textarea
					onChange={(e) => handle(e)}
					id="comment"
					value={data.comment}
					name=""
					cols="50"
					rows="1"
					placeholder={t("submitComments")}
				></textarea>
				<Button buttonTitle={t("submitTitle")} />
			</form>
		</div>
	);
};
export default Submit;
