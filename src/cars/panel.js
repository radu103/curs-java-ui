import React from "react";
import { fetchData } from "./connect";

let id;

function showPanel() {
    document.getElementById("panelBody"+id).style.display="block";
    document.getElementById("panelBody"+id).classList.remove('animate__fadeOut');
    document.getElementById("panelBody"+id).classList.add('animate__animated', 'animate__fadeIn');
    console.log("panel shown");
}
function hidePanel() {
    document.getElementById("panelBody"+id).classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {document.getElementById("panelBody"+id).style.display="none";}, 1000);
}

function Panel({mainFunction,title,btnValue,value}) {
    const handleClick = async event => {
        id = event.currentTarget.id;
        showPanel();
      };
    return (
        <>
            <button type="button" class="animate__animated animate__fadeInUp" id={value} onClick={handleClick}>{btnValue}</button>
            <div id={"panelBody"+value} class="otherSqr">
                <ul>
                    <li>
                        <h1>{title}</h1>
                    </li>
                    <li>
                        <button type="button" onClick={mainFunction}>yes</button>
                        <button type="button" onClick={() => {hidePanel()}}>no</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Panel;