import React from "react";
// import { Stack } from "react-ui";

function CarRow(props) {
    return <div>I am {props.maker} and my color is { props.color }</div>;
}

function Cars() {

    return (
      <>
        <h1>Who lives in my garage?</h1>
        { this.state.cars.map((car) => <CarRow brand={car.maker} color={car.color} />)}
      </>
    );
}

export default Cars;