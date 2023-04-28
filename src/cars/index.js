import React from "react";

const [cars, setCars] = useState([]);

function CarRow(props){
  return <div>{props.maker} and my color is {props.color}</div>
}

function Cars (){
  return (
      <>
      <h1>Who lives in my garage?</h1>
         {cars.map((car) => <CarRow brand={car.makes} color={car.color}/>)}
      </>
  );
  }

export default Cars;
