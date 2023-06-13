
// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    if (`${value}` <= 42) {
      return 42 - `${value}`;
    } else {
      return `${value}` - 42;
    }
  }
  function distanceFromHqInFeet(feet) {
    if (`${feet}` <= 42) {
      return (42 - `${feet}`) * 264;
    } else {
      return (`${feet}` - 42) * 264;
    }
  }
  
  function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
      return (start - destination) * 264;
    } else {
      return (`${destination} ` - `${start}`) * 264;
    }
  }
  function calculatesFarePrice(start, destination) {
    if ((start - destination) * 264 <= 400) {
      return 0;
    } else if (
      (start - destination) * 264 >= 400 &&
      (start - destination) * 264 <= 2000
    ) {
      return 2.56;
    } else if ((destination - start) * 264 > 2000) {
      return 25;
    } else if ((start - destination) * 264 > 2500) {
      return "cannot travel that far";
    }
  }