import "./button.scss";
// import Modal from "../modal/modal";
import { useState } from "react";
// import { ModalState } from "../modal/modalState";
// import { isOpen } from "../modal/modalState";
// import { setIsOpen } from "../modal/modalState";

export default function Button({ buttonTitle }) {
	// console.log(modalState.isOpen,">>> modal Open");
	const [isOpen, setIsOpen] = useState(false);
	// console.log(setIsOpen,">>> is open");
	// console.log(ModalState, ">>> modal state");
	return (
		<>
			<button className="button" onClick={console.log("on click")}>{buttonTitle}</button>
			{/* <button className="button" onClick={() => setIsOpen(true)}>
				{buttonTitle}
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} />} */}
		</>
	);
}
