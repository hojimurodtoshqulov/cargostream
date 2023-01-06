import "./button.scss";
export default function Button({ buttonTitle }) {
	return (
		<>
			<button className="button">
				{buttonTitle}
			</button>
		</>
	);
}
