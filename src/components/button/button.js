import "./button.scss";
export default function Button({ buttonTitle }) {
	return (
		<>
			<button className="button" onClick={console.log("on click")}>
				{buttonTitle}
			</button>
		</>
	);
}
