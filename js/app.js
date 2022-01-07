"use strict";

const btn = document.getElementById("btn");
const img = document.getElementById("img");

btn.addEventListener("click", getDogImage);

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
