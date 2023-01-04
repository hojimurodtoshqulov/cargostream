// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import "../stages.scss";
// // http://localhost:8082/api/v1/workflow/
// export default function Stage1() {
// 	const [response, setResponse] = useState(null);
// 	const fetchQuotes = async () => {
// 		try {
// 			const res = await axios.get(`https://fakestoreapi.com/products`, {
// 				headers: {
// 					'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
// 					'x-rapidapi-key': '1',
// 				},
// 				params: { category: 'all', count: '1' },
// 			});
// 			setResponse(res.data);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
// 	useEffect(() => {
// 		// Trigger the API Call
// 		fetchQuotes();
// 	}, []);
// 	return (
// 		<div>
// 			{
// 				// If the response is not null, display the quote.
// 				response && <span>{response.text}</span>
// 			}
// 		</div>
// 	);
// }








import React from "react";
import { Stage1Data } from "./stage1Data/stage1Data";
import "../stages.scss";

const Stage1 = ({ props }) => {
	return (
		<div data-aos="fade-left" data-aos-duration="1000">
			{Stage1Data.map((item, index) => {
				return (
					<div className="stages-items" key={item.key}>
						<h1 className="orderNumber">{item.orderNumber}</h1>
						<div className="texts">
							<h3 className="title">{item.title}</h3>
							<p className="description">{item.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stage1;
