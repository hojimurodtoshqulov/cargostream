import React from "react";
import "./location.scss";
const Location = () => {
	return (
		<div className="map" data-aos="zoom-in-up" data-aos-duration="1500">
			<h2>Location</h2>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40069.147432393685!2d69.1473845143281!3d41.23147043659135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72ade4d56cbf0!2sCustoms%20Terminal%20Ark%20Bulak!5e0!3m2!1sru!2s!4v1671909525324!5m2!1sru!2s"
				width="100%"
				style={{ border: "0" }}
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</div>
	);
};

export default Location;

//////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import "./location.scss";
// import {
// 	YMaps,
// 	Map,
// 	Placemark,
// 	FullscreenControl,
// 	GeolocationControl,
// 	TrafficControl,
// 	ZoomControl,
// } from "react-yandex-maps";

// const Location = () => {
// 	return (
// 		<YMaps className="map">
// 			<div className="map" data-aos="zoom-in-up" data-aos-duration="1500">
// 				<Map
// 					defaultState={{
// 						center: [41.2220292, 69.1391517],
// 						zoom: 10,
// 					}}
// 				>
// 					<Placemark geometry={[41.2220292, 69.1391517]} />
// 					<FullscreenControl options={{ float: "left" }} />
// 					<GeolocationControl options={{ float: "right" }} />
// 					<TrafficControl options={{ float: "right" }} />
// 					<ZoomControl options={{ float: "left" }} />
// 				</Map>
// 			</div>
// 		</YMaps>
// 	);
// };

// export default Location;

///////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import './location.scss';
// import { Icon } from '@iconify/react';
// // import locationIcon from '@iconify/icons-mdi/map-marker';

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={Icon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// )

// export default LocationPin;
