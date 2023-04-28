import React from "react";
import { Stack } from "react-ui";

const carsList = [
    {
        brand : 'Ford',
        no : 1
    },
    {
        brand : 'BMW',
        no : 2
    },
    {   
        brand : 'Audi',
        no : 3
    }
];

function CarRow(pr) {
    return <div>{pr.no}. I am a { pr.brand }</div>;
}

function Cars() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        {carsList.map((car) => <CarRow brand={car.brand} no={car.no} />)}
      </>
    );
}

export default Cars;