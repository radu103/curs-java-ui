import React from "react";

let data2;
let serverAddress = "http://localhost:8080/";

function setData(params) {
  data2=params;
}

async function fetchRawData(params){
    await fetch(serverAddress + params)
      .then(response => {
        return response.json()
      })
      .then(async data => {
        await setData(data)
      })
}

export function postData(title, maker, model, color, year, price, photo) {
    const dataToSend = JSON.stringify({"maker": maker, "model": model, "color": color, "year": year, "price": price, "currency": "EUR", "active": true, "picUrl": photo});
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataToSend
    };
    fetch(serverAddress+title, requestOptions)
        .then(response => response.json())
}

export function uPostData(title, id, maker, model, color, year, price, photo) {
  const dataToSend = JSON.stringify({"id": id, "maker": maker, "model": model, "color": color, "year": year, "price": price, "currency": "EUR", "active": true, "picUrl": photo});
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: dataToSend
  };
  fetch(serverAddress+title, requestOptions)
      .then(response => response.json())
}

export async function fetchData(params) {
  await fetchRawData(params);
  return data2;
}