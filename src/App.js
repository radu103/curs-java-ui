import React, { useEffect, useState } from "react";
import "./styles.css";

import { ThemeProvider } from "react-ui";
import { tokens, components } from "react-ui/themes/light";

// import Cars from "./cars";

function CarRow(props) {
  return <div>I am {props.brand} and my color is { props.color }</div>;
}

export default function App() {

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
    <ThemeProvider tokens={tokens} components={components}>
        <h1>Who lives in my garage?</h1>
        { cars.map((car) => <CarRow brand={car.maker} color={car.color} />)}
    </ThemeProvider>
  );
}
