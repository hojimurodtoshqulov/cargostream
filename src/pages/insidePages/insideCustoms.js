import React from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/company.png";
import { cardsData } from "../../components/cards/cardsData/cardsData";
import customsImg from "../../media/customs-clearance.png";
import InsideCategories from "./insideCategories/insideCategories";
const InsideCustoms = () => {
	return (
		<div className="main inside">
			<Nav />
			<input type="checkbox" id="navLinks__menu" />
			<NavbarLinks />
			<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
			<ShowBg bgImage={bgImg} title={"Our company"} />
			<h2 className="page__title">
				Услуги <span>/ Таможенное оформления</span>
			</h2>
			<div className="inside__elements wrapper">
				<div className="inside__elements-col1">
					<h3>НАШИ УСЛУГИ</h3>
					<InsideCategories cardsData={cardsData} />
				</div>
				<div className="inside__elements-col2">
					<div className="inside__elements-col2-elements">
						<img src={customsImg} alt="inside img" />
						<p>
							Комплексное сопровождение импортных и экспортных операций и
							осуществление таможенной очистки любых грузов в любом таможенном
							посту «под ключ».
							<br /> Оформление таможенных деклараций (Импорт, экспорт,
							реэкспорт, переработка в таможенной территории и др).
							<br /> Составление проектов внешнеторговых контрактов,
							товаросопроводительных документов.
							<br /> Консультации по организации экспортных и импортных
							операций.
							<br /> Сопровождение процесса сертификации и маркировки.
							<br /> Международные транзакции, ценообразование, валютное
							регулирование, INCOTERMS
							<br /> Предварительный расчет таможенных платежей,
							<br /> Представлять интересы клиента в различных инстанциях
							связанные с растаможиванием грузов
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export { InsideCustoms };
