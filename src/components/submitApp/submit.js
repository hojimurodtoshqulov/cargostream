import React from "react";
import Button from "../button/button";
import "./submit.scss";

const Submit = () => {
	return (
		<div className="submit">
			<h2>Оставить заявку</h2>
			<p>
				Мы всегда открыты для диалога, предложений и комментариев. Мы хотим,
				чтобы у наших клиентов всегда была возможность связаться с нами и задать
				вопросы. Вы можете найти наш офис на карте или позвонить по нашему
				номеру, и у вас есть возможность отправить свой запрос через специальную
				форму ниже.
			</p>
			<form action="" className="">
				<input
					className="input-tell form-control search-input"
					type="text"
					placeholder="тел"
					required
				/>
				<input
					className="input-price form-control search-input"
					type="text"
					placeholder="сумма"
					required
				/>
				<input
					className="input-name form-control search-input"
					type="text"
					placeholder="товар"
					required
				/>
				<textarea
					name=""
					id=""
					cols="50"
					rows="1"
					placeholder="коментарии"
				></textarea>
			<Button buttonTitle={"Оставить заявку"} />
			</form>
		</div>
	);
};

export default Submit;
