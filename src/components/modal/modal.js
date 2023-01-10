import React from "react";
import modalImg from "../../media/news.jpg";
import "./modal.scss";
const Modal = ({ open, onClose, modalData, id }) => {
	if (!open) return null;
	return (
		<div className="overlay">
			<div className="modalContainer">
				<img src={modalImg} alt="" />
				<div className="modalDiv">
					<p onClick={onClose} className="closeBtn">
						X
					</p>
						<p className="modalTexts">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
							praesentium debitis adipisci cupiditate quaerat ad eaque ab
							repellendus esse distinctio fugit nesciunt eveniet expedita, harum
							quas, veniam minus amet repudiandae? Animi earum blanditiis
							repellat ut velit perspiciatis ducimus, autem aspernatur,
							quibusdam rerum laboriosam ea iure id assumenda facere saepe
							officiis.
						</p>
				</div>
			</div>
			<div onClick={onClose} className="modalBg"></div>
		</div>
	);
};

export default Modal;

// import React, { useState } from "react";
// // import "antd/dist/antd.css";
// import { Modal, Button } from "antd";
// const ModalComponent = () => {
// 	const [open, setOpen] = useState(false);
// 	return (
// 		<>
// 			<Button type="primary" onClick={() => setOpen(true)}>
// 				Open Modal of 1000px width
// 			</Button>
// 			<Modal
// 				title="Modal 1000px width"
// 				centered
// 				open={open}
// 				onOk={() => setOpen(false)}
// 				onCancel={() => setOpen(false)}
// 				width={1000}
// 			>
// 				<p>some contents...</p>
// 				<p>some contents...</p>
// 				<p>some contents...</p>
// 			</Modal>
// 		</>
// 	);
// };

// export default ModalComponent;
