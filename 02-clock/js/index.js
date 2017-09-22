var hoursHand = document.getElementById('hoursHand'),
  minutesHand = document.getElementById('minutesHand'),
  secondsHand = document.getElementById('secondsHand'),
  date,
  hours,
  minutes,
  seconds;

function updateHands() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  if (hours > 12) {
    hoursHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + ((hours - 12) * 30 + minutes * 0.5) + 'deg)';
    hoursHand.style.transform = 'translate(-50%, 25%) rotate(' + ((hours - 12) * 30 + minutes * 0.5) + 'deg)';
  } else if (hours <= 12) {
    hoursHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + ((hours * 30) + minutes * 0.5) + 'deg)';
    hoursHand.style.transform = 'translate(-50%, 25%) rotate(' + ((hours * 30) + minutes * 0.5) + 'deg)';
  }

  minutesHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + (minutes) * 6 + 'deg)';
  minutesHand.style.transform = 'translate(-50%, 25%) rotate(' + (minutes) * 6 + 'deg)';

  secondsHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + (seconds) * 6 + 'deg)';
  secondsHand.style.transform = 'translate(-50%, 25%) rotate(' + (seconds) * 6 + 'deg)';
}
updateHands();

window.setInterval(function() {
  updateHands();
}, 1000);

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('digital-clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
