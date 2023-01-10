import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";
import { Company } from "./pages/company/company";
import { News } from "./pages/news/news";
import { Services } from "./pages/services/services";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
// import "antd/dist/antd.css";
const App = () => {
	useEffect(() => {
		Aos.init({ duration: 2000, mirror: true });
	}, []);
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/company" element={<Company />} />
				<Route path="/news" element={<News />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		</>
	);
};

export default App;
