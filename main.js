let secondIndicator = document.querySelector(".second");
let minuteIndicator = document.querySelector(".minute");
let hourIndicator = document.querySelector(".hour");

setInterval(fixClock, 0);

function fixClock() {
  let currentDate = new Date();
  let millisecondsRate = currentDate.getMilliseconds() / 1000;
  let secondsRate = (millisecondsRate + currentDate.getSeconds()) / 60;
  let minutesRate = (secondsRate + currentDate.getMinutes()) / 60;
  let hoursRate = (minutesRate + currentDate.getHours()) / 12;

  fixRotation(secondIndicator, secondsRate);
  fixRotation(minuteIndicator, minutesRate);
  fixRotation(hourIndicator, hoursRate);
}

function fixRotation(element, rotationRate) {
  element.style.setProperty("--rotation", rotationRate * 360);
}

fixClock();
