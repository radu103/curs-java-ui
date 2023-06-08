import React, { useEffect, useState } from "react";
// import { Stack } from "react-ui";
// import App from 'App.js'
import {fetchData} from "./connect";
import Creator from "./creator";
import Panel from "./panel";
import Editor from "./editor";
import { showBody, setData } from "./editor";

var count=0;

export function isEmpty(str) {
  return !str.trim().length;
}
function CarRow(props) {
  const handleClick = async event => {
    await setData(event.currentTarget.id);
    showBody();
  };
  if (props.photo==null) {
    props.photo="img/missing.png";
  }
  if(count==4) {
    count=0;
    return <><div class="carSqr animate__animated animate__fadeInUp" ><div id="carPic"><img src={props.photo}></img></div><ul> <li>Brand: {props.brand}</li> <li>Model: { props.model } { props.year }</li> <li>Color: { props.color }</li> <li>Price: { props.price } { props.curr }</li></ul><button class="editButton" id={props.id} onClick={handleClick}>edit</button></div><br/><br/></>; 
  } else {
    count=count+1;
    return <div class="carSqr animate__animated animate__fadeInUp" ><div id="carPic"><img src={props.photo}></img></div><ul><li>Brand: {props.brand}</li> <li>Model: { props.model } { props.year }</li> <li>Color: { props.color }</li> <li>Price: { props.price } { props.curr }</li></ul><button class="editButton" id={props.id} onClick={handleClick}>edit</button></div>;
  }
  
}
export function hideUi() {
  document.getElementById("carBody").classList.add('animate__animated', 'animate__fadeOut');
  
  setTimeout(() => {document.getElementById("carBody").style.display = "none"}, 1000);
}
export function showUi() {
  document.getElementById("carBody").classList.add('animate__animated', 'animate__fadeIn');
  document.getElementById("carBody").classList.remove('animate__fadeOut');
  document.location.reload();

  setTimeout(() => {document.getElementById("carBody").style.display = "block"}, 1000);
}

function Cars() {
  const [cars, setCars ] = useState([]);

  async function multiply() {
    count=0;
    var percentage=document.getElementById("multiplyValue").value;
    if(!isEmpty(percentage)) {
      let data = await fetchData("v2/car/list/expensive?percent=" + (percentage-1)*100);
      setCars(data);
      document.getElementById("errorMesasge").innerHTML="";
    } else {
      document.getElementById("errorMessage").innerHTML="value cannot be empty";
    }
  } 
  async function divide() {
    count=0;
    var percentage = document.getElementById("divideValue").value;
    if (!isEmpty(percentage)) {
      let data = await fetchData("v2/car/list/cheap?value=" + percentage);
      setCars(data);
      document.getElementById("errorMesasge").innerHTML=null;
    } else {
      document.getElementById("errorMessage").innerHTML="value cannot be empty";
    }
  }


  useEffect(async () => {
    let data = await fetchData("v2/car/list");
    setCars(data);
  }, []);
    return (
      <>
      <div id="carBody">
        <h1 class="animate__animated animate__fadeIn">Who lives in my garage?</h1><br />
        { cars.map((car) => <CarRow id={car.id} brand={car.maker} model={car.model} year={car.year} color={car.color} price={car.price} curr={car.currency} photo={car.picUrl}/>)}
        <br /><br />
        <input id="multiplyValue" type="text" class="animate__animated animate__fadeInUp"></input>
        <button type="button" class="animate__animated animate__fadeInUp" onClick={function(){multiply()}}>multiply by x times</button><br/>
        <input id="divideValue" type="text" class="animate__animated animate__fadeInUp"></input>
        <button type="button" class="animate__animated animate__fadeInUp" onClick={function(){divide()}}>divide by x times</button><br/>
        <p id="errorMessage"></p>
        <Panel/>
        <br/>
      </div>
      <Creator/>
      <Editor/>
      </>
    );
}

export default Cars;