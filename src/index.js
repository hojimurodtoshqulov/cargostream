import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import './locales/i18n';
// import i18n from "i18next";
// import {useTranslation, initReactI18next} from "react-i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)
// ReactDOM.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );
