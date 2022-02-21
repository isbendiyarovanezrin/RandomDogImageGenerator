"use strict";

const btn = document.getElementById("btn");
const img = document.getElementById("img");
const sound = document.getElementById("sound");

btn.addEventListener("click", getDogImage);

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
      sound.play();
      sound.currentTime = 0;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1700);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
