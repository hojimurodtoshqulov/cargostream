import React from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import { cardsData } from "../../components/cards/cardsData/cardsData";
import roadFreightImg from "../../media/news.jpg";
import InsideCategories from "./insideCategories/insideCategories";
const InsideRoad = () => {
	return (
		<div className="main inside">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Our company"} />
			<h2 className="page__title">
				Услуги <span>/ АВТОПЕРЕВОЗКИ</span>
			</h2>
			<div className="inside__elements wrapper">
				<div className="inside__elements-col1">
					<h3>НАШИ УСЛУГИ</h3>
					<InsideCategories cardsData={cardsData} />
				</div>
				<div className="inside__elements-col2">
					<div className="inside__elements-col2-elements">
						<img src={roadFreightImg} alt="inside img" />
						<p>
							Добросовестность и честность являются нашими основными принципами.
							Благодаря наших принципов мы создаем креативные решения
							ориентированный на клиента.
							<br />
							<br /> Как одна из хорошо зарекомендовавших себя и ведущих
							компаний в сфере международных перевозок мы доставим ваши грузы
							быстро и безопасно с нашим молодым и опытным персоналом в
							направлении Турции, Китая, Казахстан, Россия, Монголия, Пакистан,
							Иран и Европу.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export { InsideRoad };
