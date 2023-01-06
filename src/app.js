import { Home } from "./pages/home/home";
import {Contact} from "./pages/contact/contact";
import {Company} from "./pages/company/company";
import {News} from "./pages/news/news";
import {Services} from "./pages/services/services";
import { Routes, Route } from "react-router-dom";
const App = () => {
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
