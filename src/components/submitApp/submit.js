import React from "react";
import Button from "../button/button";
import "./submit.scss";
import { useTranslation } from "react-i18next";
const Submit = () => {
	const { t } = useTranslation();
	return (
		<div className="submit">
			<h2>{t("submitTitle")}</h2>
			<p>{t("submitDescription")}</p>
			<form action="" className="">
				<input
					className="input-tell form-control search-input"
					type="text"
					placeholder={t("submitPhone")}
					required
				/>
				<input
					className="input-price form-control search-input"
					type="text"
					placeholder={t("submitPrice")}
					required
				/>
				<input
					className="input-name form-control search-input"
					type="text"
					placeholder={t("submitProduct")}
					required
				/>
				<textarea
					name=""
					id=""
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