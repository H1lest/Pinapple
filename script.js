var pinapple = document.getElementById("pinapple");
var counter = 0;
var counterElem = document.getElementById("counter");

pinapple.ondragstart = function() {
    return false;
  };

function increaseCounter() {
    counter++;
    counterElem.textContent = counter;
    new Audio("assets/click.mp3").play()
}
