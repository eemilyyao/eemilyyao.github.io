
function makeBig() {
  var punctuations = document.querySelectorAll('.comma');
  punctuations.forEach((element) => {
    console.log(element)

    element.style.fontSize = "100px"
  });
}

function makeMedium() {
  var punctuations = document.querySelectorAll('.comma');
  punctuations.forEach((element) => {
    console.log(element)

    element.style.fontSize = "50px"
  });
}

function makeSmall() {
  var punctuations = document.querySelectorAll('.comma');
  punctuations.forEach((element) => {
    console.log(element)

    element.style.fontSize = "10px"
  });
}