import React from "react";
import Button from "../button/button";
import "./submit.scss";

const Submit = () => {
	return (
		<div className="submit">
			<h2>Оставить заявку</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint excepturi
				quibusdam temporibus nesciunt est obcaecati necessitatibus, accusamus
				error esse asperiores!
			</p>
			<form action="" className="">
				<input
					className="input-name form-control search-input"
					type="text"
					placeholder="Your name"
					required
				/>
				<input
					className="input-tell form-control search-input"
					type="text"
					placeholder="Your number"
					required
				/>
				<textarea
					name=""
					id=""
					cols="50"
					rows="1"
					placeholder="Comment"
				></textarea>

			</form>
			<Button buttonTitle={"Оставить заявку"} />
		</div>
	);
};

export default Submit;
