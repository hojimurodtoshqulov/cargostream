import React from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import { cardsData } from "../../components/cards/cardsData/cardsData";
import img1 from "../../media/transportation-and-logistics-of-container-3f334ac6.jpeg";
import InsideCategories from "./insideCategories/insideCategories";
const InsideAir = () => {
	return (
		<div className="main inside">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Our company"} />
			<h2 className="page__title">
				Услуги <span>/ АВИАПЕРЕВОЗКИ</span>
			</h2>
			<div className="inside__elements wrapper">
				<div className="inside__elements-col1">
					<h3>НАШИ УСЛУГИ</h3>
					<InsideCategories cardsData={cardsData}/>
				</div>
				<div className="inside__elements-col2">
					<div className="inside__elements-col2-elements">
						<img src={img1} alt="inside img" />
						<p>
							Мы знаем, как ценно время в авиаперевозках. Благодаря нашему опыту
							в области глобального воздушного транспорта, мы тщательно
							планируем ваш груз и следим за процессом обработки. От упаковки и
							измерения груза до планирования времени в пути и таможенного
							оформления наша команда экспертов всегда к вашим услугам для
							полной доставки.
							<br /> <br /> Особенности наших услуг:
							<br /> - Партнерство для низких затрат
							<br /> - Перевозка опасных грузов
							<br /> - Негабаритный и тяжеловесный груз
							<br /> - Скоропортящийся груз
							<br /> - Животные
							<br /> - Услуги консолидации
							<br /> - Возможность закупки
							<br /> - Отслеживания перемещения груза 24/7
							<br /> - Прозрачность
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export { InsideAir };
