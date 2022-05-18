// DOM title hover (do this in JS?)

let nameElement = document.getElementById("nameTitle");
let jobElement = document.getElementById("jobTitle");

nameElement.addEventListener("mouseenter", () => {
  nameElement.style.fontSize = "350%";
});

nameElement.addEventListener("mouseleave", () => {
  nameElement.style.fontSize = "275%";
});

jobElement.addEventListener("mouseenter", () => {
  jobElement.style.fontSize = "175%";
});

jobElement.addEventListener("mouseleave", () => {
  jobElement.style.fontSize = "150%";
});

// Advice AJAX---------------------------------------------------------
// Is it better to do on the window load or on the DOM load?
// window.addEventListener("load", newAdvice);

document.addEventListener("DOMContentLoaded", newAdvice);

function newAdvice() {
  $.ajax("https://api.adviceslip.com/advice", {
    success: function (adviceData) {
      // console.log(JSON.parse(adviceData));
      let adviceLine = JSON.parse(adviceData);
      // console.log(adviceLine.slip.advice);

      let adviceParagraph = document.getElementById("advice");
      adviceParagraph.innerHTML = adviceLine.slip.advice;
    },
  });
}
