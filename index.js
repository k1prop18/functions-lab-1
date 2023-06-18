
// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  if (value <= 42) {
    return 42 - value;
  } else {
    return value - 42;
  }
}
function distanceFromHqInFeet(value) {
  if (value <= 42) {
    return (42 - value) * 264;
  } else {
    return (value - 42) * 264;
  }
}

function distanceTravelledInFeet(a, b) {
  if (a <= b) {
    return (b - a) * 264;
  } else {
    return (a - b) * 264;
  }
}

let a = "start"
let b = "destination"

function calculatesFarePrice(a, b) {
  if (distanceTravelledInFeet(a, b) < 400) {
    return 0;
  } 
  else if (distanceTravelledInFeet(a, b) > 400 && distanceTravelledInFeet(a, b) <= 2000) {
    return (distanceTravelledInFeet(a, b) - 400) * 0.02
  }
  else if (distanceTravelledInFeet(a, b) > 2000 && distanceTravelledInFeet(a, b) < 2500) {
    return 25;
  } 
  else if (distanceTravelledInFeet(a, b) > 2500) {
    return 'cannot travel that far';
  }
}

