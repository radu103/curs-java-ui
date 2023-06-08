import React from "react";
import {hideUi, showUi, isEmpty} from ".";
import { postData } from "./connect";

function showBody() {
    hideUi();

    document.getElementById("creatorBody").style.display="block";
    document.getElementById("creatorBody").classList.remove('animate__fadeOut');
    document.getElementById("creatorBody").classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');

    document.getElementById("clearButton").style.display="none";
}

function hideBody() {

    document.getElementById("creatorBody").style.display="none";
    document.getElementById("creatorBody").classList.remove('animate__fadeIn');
    document.getElementById("creatorBody").classList.add('animate__animated', 'animate__fadeOut');

    setTimeout(()=>{document.getElementById("clearButton").style.removeProperty("display")}, 1000);
    document.getElementById("clearButton").style.textAlign="center";

    showUi();
}

async function submitData() {

    var maker = document.getElementById("makerValue").value;
    var model = document.getElementById("modelValue").value;
    var color = document.getElementById("colorValue").value;
    var year = document.getElementById("yearValue").value;
    var price = document.getElementById("priceValue").value;
    var photo = document.getElementById("photoValue").value;
    if (isEmpty(photo)) {
        photo=null;
    }
    if (!isEmpty(maker) && !isEmpty(model) && !isEmpty(color) && !isEmpty(year) && !isEmpty(price)) {
        postData("v2/car/add",maker,model,color,year,price,photo);
        document.getElementById("errorMessage").innerHTML = "succes! car was added";
    } else {
        document.getElementById("errorMessage").innerHTML = "all fields must be completed!";
    }
}

function Creator() {
    return (
        <>
            <button type="button" id="clearButton" class="animate__animated animate__fadeInUp" onClick={() => {showBody()}}>add car</button>
            <div id="creatorBody">
                <h1>car creator</h1>
                <ul>
                    <li>
                        Maker: <input type="text" id="makerValue"></input>
                    </li>
                    <li>
                        Model: <input type="text" id="modelValue"></input>
                    </li>
                    <li>
                        Year: <input type="text" id="yearValue"></input>
                    </li>
                    <li>
                        Color: <input type="text" id="colorValue"></input>
                    </li>
                    <li>
                        Price: <input type="text" id="priceValue"></input>
                    </li>
                    <li>
                        Photo (optional): <input type="text" id="photoValue"></input> 
                    </li>
                    <li>
                        <button type="button" onClick={() => {submitData();setTimeout(() => {hideBody()}, 500)}}>submit</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => {hideBody()}}>back</button>
                    </li>
                    <li>
                        <h3 id="errorMessage"></h3>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Creator;