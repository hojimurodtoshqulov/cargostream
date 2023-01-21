import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";
import { Company } from "./pages/company/company";
import { News } from "./pages/news/news";
import { Services } from "./pages/services/services";
import { InsideAir } from "./pages/insidePages/insideAir";
import { InsideCustoms } from "./pages/insidePages/insideCustoms";
import { InsideRoad } from "./pages/insidePages/insideRoad";
import { InsideShip } from "./pages/insidePages/insideShip";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import i18next from "i18next";
i18next.init({
	lng: "en", // if you're using a language detector, do not define the lng option
	debug: true,
	resources: {
		en: {
			translation: {
				key: "hello world",
			},
		},
	},
});
// document.getElementById('root').innerHTML = i18next.t('key');
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
				<Route path="/services/airFreight" element={<InsideAir />} />
				<Route path="/services/customs" element={<InsideCustoms />} />
				<Route path="/services/roadFreight" element={<InsideRoad />} />
				<Route path="/services/shipFreight" element={<InsideShip />} />
			</Routes>
		</>
	);
};

export default App;
