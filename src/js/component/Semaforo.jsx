import React, {useState} from "react";


export const Semaforo = () => {
    const [trafficLight, setTrafficLigth ] = useState()

    const encenderApagar = (trafficLight) => {
        setTrafficLigth(trafficLight)

    }

    return (
        <div>
            <div className="container">
                <div className={`trafficLight ${trafficLight === 'red' ? 'active' : ''}`} onClick={() => encenderApagar('red')} id="red" ></div>
                <div className={`trafficLight ${trafficLight === 'yellow' ? 'active' : ''}`} onClick={() => encenderApagar('yellow')} id="yellow" ></div>
                <div className={`trafficLight ${trafficLight === 'green' ? 'active' : ''}`} onClick={() => encenderApagar('green')} id="green" ></div>
            </div>

            
        </div>

    )
}