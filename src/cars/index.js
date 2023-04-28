import React from "react";
import { Stack } from "react-ui";

const carsList = [
  {
    name : 'Ford',
    no : 1
  },
  {
    name : 'BMW',
    no : 2
  },
  {
    name : 'Audi',
    no : 3
  }
  ]

function CarRow(props){
  return <li>{props.no}. I am a {props.brand}</li>
}

function Cars (){
  return (
      <>
      <h1>Who lives in my garage?</h1>
      <ul> 
         {carsList.map((car) => <CarRow brand={car} no={car.no}/>)}
      </ul>
      </>
  );
  }

export default Cars;
