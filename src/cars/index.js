import React,{useEffect, useState} from "react";
// import { Stack } from "react-ui";

function CarRow(props) {
    return <div>I am {props.brand} and my color is { props.color }</div>;
}
 
function Cars() {


  const [cars, setCars ] = useState([]);

  function fetchCarData(){
    fetch("http://localhost:8080/v1/car/list")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCars(data);
      })
  }

  useEffect(() => {
    fetchCarData()
  }, []);

    return (
      <>
        <h1>Who lives in my garage?</h1>
        { cars.map((car) => <CarRow brand={car.maker} color={car.color} />)}
      </>
    );
}

export default Cars;