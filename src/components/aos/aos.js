import React from "react";
import Button from "../button/button";
import "./aos.scss"

const Aos = () => {
	return (
		<>
			<div data-aos="fade-up-right" data-aos-duration="2000" className="div1">
				<img src="" alt="" />
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
					incidunt laudantium excepturi maxime itaque aliquam corrupti
					perferendis dignissimos accusantium? Sunt enim obcaecati recusandae
					cum quod exercitationem nam natus saepe, iure temporibus soluta.
					Tenetur provident earum maxime nemo itaque esse veritatis iusto
					similique animi, temporibus facere nesciunt perspiciatis, deleniti
					autem suscipit.
				</div>
				<Button buttonTitle={"click"}/>
			</div>
			<div data-aos="zoom-in-up" data-aos-duration="1500" className="div2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius
				natus quasi facilis quod, velit libero porro magni ad similique rem. Sit
				est, enim laudantium dolorem provident quisquam architecto adipisci
				corporis eaque nostrum dignissimos repellendus tempore culpa obcaecati.
				Omnis velit placeat debitis optio quos sit repudiandae accusamus
				molestiae soluta. Ipsum.
				<img src="" alt="" />
				<p >
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
					incidunt laudantium excepturi maxime itaque aliquam corrupti
					perferendis dignissimos accusantium? Sunt enim obcaecati recusandae
					cum quod exercitationem nam natus saepe, iure temporibus soluta.
					Tenetur provident earum maxime nemo itaque esse veritatis iusto
					similique animi, temporibus facere nesciunt perspiciatis, deleniti
					autem suscipit.
				</p>
				<Button buttonTitle={"click"}/>
			</div>
		</>
	);
};

export default Aos;
