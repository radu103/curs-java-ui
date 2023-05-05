import React, { useEffect, useState } from "react";
// import { Stack } from "react-ui";
// import App from 'App.js'

function CarRow(props) {
    return <div>I am {props.brand} and my color is { props.color } and the price is { props.price } { props.curr }</div>;
}

function Cars() {
  const [cars, setCars ] = useState([]);

  function fetchCarData(params){
    fetch("http://localhost:80/v1/car/list" + params)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCars(data);
      })
  }

  useEffect(() => {
    fetchCarData("");
  }, []);
    return (
      <>
        <h1>Who lives in my garage?</h1>
        { cars.map((car) => <CarRow brand={car.maker} color={car.color} price={car.price.price} curr={car.price.currency} />)}
      </>
    );
}

export default Cars;