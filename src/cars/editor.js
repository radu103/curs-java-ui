import React from "react";
import {hideUi, showUi, isEmpty} from ".";
import { fetchData, uPostData } from "./connect";

var localId, localMaker, localModel, localYear, localColor, localPrice, localPhoto; 

export function showBody() {
    hideUi();

    document.getElementById("editorBody").style.display="block";
    document.getElementById("editorBody").classList.remove('animate__fadeOut');
    document.getElementById("editorBody").classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');

    document.getElementById("clearButton").style.display="none";
}

function hideBody() {

    document.getElementById("editorBody").style.display="none";
    document.getElementById("editorBody").classList.remove('animate__fadeIn');
    document.getElementById("editorBody").classList.add('animate__animated', 'animate__fadeOut');

    setTimeout(()=>{document.getElementById("clearButton").style.removeProperty("display")}, 1000);
    document.getElementById("clearButton").style.textAlign="center";

    showUi();
}


async function submitData() {
    var maker = document.getElementById("eMakerValue").value;
    var model = document.getElementById("eModelValue").value;
    var color = document.getElementById("eColorValue").value;
    var year = document.getElementById("eYearValue").value;
    var price = document.getElementById("ePriceValue").value;
    var photo = document.getElementById("ePhotoValue").value;
    if(isEmpty(maker)) {
        maker = localMaker;
    } 
    if (isEmpty(model)) {
        model = localModel;
    } 
    if (isEmpty(color)) {
        color = localColor;
    } 
    if (isEmpty(year)) {
        year = localYear;
    } 
    if (isEmpty(price)) {
        price = localPrice;
    }
    if (isEmpty(photo)) {
        photo = localPhoto;
    }
    await uPostData("v2/car/add",localId,maker,model,color,year,price,photo);
    document.getElementById("errorMessage").innerHTML = "succes! car was added";
}

async function deleteCar() {
    await uPostData("v2/car/delete",localId,localMaker,localModel,localColor,localYear,localPrice,localPhoto);
    document.getElementById("errorMessage").innerHTML = "succes! car was added";
}


export async function setData(id) { // placeholder
    localId=id;
    let data = await fetchData("v2/car/list");
    data.map((car)=> {
            if(car.id==localId) {
                localMaker=car.maker;
                document.getElementById("eMakerValue").placeholder=localMaker;
                localModel=car.model;
                document.getElementById("eModelValue").placeholder=localModel;
                localColor=car.color;
                document.getElementById("eColorValue").placeholder=localColor;
                localYear=car.year;
                document.getElementById("eYearValue").placeholder=localYear;
                localPrice=car.price;
                document.getElementById("ePriceValue").placeholder=localPrice;
                localPhoto=car.picUrl;
                document.getElementById("ePhotoValue").placeholder=localPhoto;
            }
        }
    )
}

function Editor() {
    return (
        <>
            {/* <button type="button" id="clearButton" class="animate__animated animate__fadeInUp" onClick={() => {showBody()}}>add car</button> */}
            <div id="editorBody">
                <h1>car editor</h1>
                <ul>
                    <li>
                        Maker: <input type="text" id="eMakerValue"></input>
                    </li>
                    <li>
                        Model: <input type="text" id="eModelValue"></input>
                    </li>
                    <li>
                        Year: <input type="text" id="eYearValue"></input>
                    </li>
                    <li>
                        Color: <input type="text" id="eColorValue"></input>
                    </li>
                    <li>
                        Price: <input type="text" id="ePriceValue"></input>
                    </li>
                    <li>
                        Photo: <input type="text" id="ePhotoValue"></input>
                    </li>
                    <li>
                        <button type="button" onClick={async () => {await submitData();setTimeout(() => {hideBody()}, 500)}}>submit</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => {hideBody()}}>back</button>
                    </li>
                    <li>
                        <button type="delete" onClick={async () => {await deleteCar();setTimeout(() => {hideBody()}, 500)}}>delete</button>
                    </li>
                    <li>
                        <h3 id="errorMessage"></h3>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Editor;