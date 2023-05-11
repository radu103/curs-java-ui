import React, { useEffect } from "react";
import { Stack } from "react-ui";


const [cars, setCars ] = useState([]);

function fetchCarData() {
    fetch("http://localhost:8080/v1/car/list")
      .then(response =>{
        return response.json()
      })
      .then(data => {
        setCars(data);
      })
}



function CarRow(pr) {
    return <div>I am a {pr.color} { pr.brand }</div>;
}

function Cars() {

    useEffect( () => {
      fetchCarData();
    })

    return (
      <>
        <h1>Tentativa de lista masini: </h1>
        {cars.state.cars.map((car) => <CarRow brand={car.brand} color={car.color} />)}
      </>
    );
}

export default Cars;