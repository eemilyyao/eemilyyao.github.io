
function makeDisappear() {
  var punctuations = document.querySelectorAll('.disappear');
  punctuations.forEach((element) => {
    console.log(element)

    element.style.color = "#FF98D0"
    element.style.fontSize = "26px"
  });
}


function makeBig() {
  var punctuations = document.querySelectorAll('.disappear');
  punctuations.forEach((element) => {
    console.log(element)

    element.style.color = "#FF98D0"
    element.style.fontSize = "200px"
  });
}

function makeBigger() {
  var punctuations = document.querySelectorAll('.disappear');
  punctuations.forEach((element) => {
    console.log(element)

    element.style.color = "#FF98D0"
    element.style.fontSize = "600px"
  });
}