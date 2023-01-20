import React from "react";
import Submit from "../submitApp/submit";
import "./modal.scss";
const Modal = ({ open, onClose, modalData, id }) => {
	if (!open) return null;
	return (
		<div className="overlay">
			<div className="modalContainer">
				<Submit />
			</div>
			<div onClick={onClose} className="modalBg"></div>
		</div>
	);
};
export default Modal;
