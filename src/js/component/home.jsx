import React from "react";

import { Semaforo } from "./Semaforo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Mi semáforo</h1>
			
			<Semaforo/>
			
		</div>
	);
};

export default Home;
