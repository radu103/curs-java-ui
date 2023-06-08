import React from "react";
import { fetchData } from "./connect";

async function reset() {
    await fetchData("v1/car/list/reset");
    document.location.reload();
}
function showPanel() {
    document.getElementById("panelBody").style.display="block";
    document.getElementById("panelBody").classList.remove('animate__fadeOut');
    document.getElementById("panelBody").classList.add('animate__animated', 'animate__fadeIn');
}
function hidePanel() {
    document.getElementById("panelBody").classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {document.getElementById("panelBody").style.display="none";}, 1000);
}

function Panel() {
    return (
        <>
            <button type="button" class="animate__animated animate__fadeInUp" onClick={function(){showPanel()}}>reset</button>
            <div id="panelBody" class="carSqr">
                <ul>
                    <li>
                        <h1>are you sure you want to reset?</h1>
                    </li>
                    <li>
                        <button type="button" onClick={() => {reset()}}>yes</button>
                        <button type="button" onClick={() => {hidePanel()}}>no</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Panel;