import React from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import { cardsData } from "../../components/cards/cardsData/cardsData";
import shipFreightImg from "../../media/shipping-rates-are-finally-falling-1428282157-standard-1536x1536.jpg";
import InsideCategories from "./insideCategories/insideCategories";
const InsideShip = () => {
	return (
		<div className="main inside">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Our company"} />
			<h2 className="page__title">
				Услуги <span>/ Морская перевозка </span>
			</h2>
			<div className="inside__elements wrapper">
				<div className="inside__elements-col1">
					<h3>НАШИ УСЛУГИ</h3>
					<InsideCategories cardsData={cardsData} />
				</div>
				<div className="inside__elements-col2">
					<div className="inside__elements-col2-elements">
						<img src={shipFreightImg} alt="inside img" />
						<p>
							Благодаря тесным партнёрским связам с компанией Safir Forwarding
							(Турция) мы имеем возможность оказать услуги по морским перевозкам
							в любую точку мира. Наше партнеры обладая более чем 30-летним
							глобальным опытом работы, предоставляет услуги в области
							международных морских перевозок и при необходимости делится своим
							опытом в области комбинированных перевозок и проектной логистики.
							<br /> наши услуги включает в себя:
							<br />- От порта до порта / от двери до двери Полная загрузка
							контейнера (FCL)
							<br />
							- Консолидированные импортные/экспортные перевозки Parcial
							Container Loading (LCL)
							<br />
							- Автомобильные перевозки из Турции на Ближний Восток, из региона
							Центральной Азии в Европу
							<br />
							- Договорные специальные грузы
							<br />
							- Перевозки специальной комплектации (opentop, рефрижератор, трал)
							<br />
							- Морские перевозки, таможенное оформление, хранение и дистрибуция
							во всех портах мира, важных для внешней торговли, с широкой
							сервисной сетью
							<br />
							- Сухопутные, воздушные, морские и железнодорожные комбинированные
							перевозки
							<br />
							- Частичная контейнерная перевозка.
							<br />
							- Частичные комбинированные перевозки, включая порт-порт, от двери
							до двери, от порта до двери и от двери до порта и другие виды
							транспорта.
							<br />
							- Надзор и контроль во время погрузки.
							<br />
							- Лицензия FMC NVOCC
							<br />
							- Морские перевозки опасных грузов
							<br />
							- Прямые контракты морских перевозчиков
							<br />
							- Услуги консолидации от нескольких поставщиков
							<br />
							- Перекрестная торговля
							<br />
							- Удобный онлайн-мониторинг
							<br />
							- Конкурентное ценообразование
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export { InsideShip };
