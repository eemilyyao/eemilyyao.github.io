console.log("test");

let myNav = document.querySelector(".nav");

console.log("my nav element:", myNav);

myNav.classList.add("special");

let body = document.body;

function 'turnOnLight'() {
  console.log("Lights on!");
  body.classList.toggle("light");
  button.classList.add("buttonOn")
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);
