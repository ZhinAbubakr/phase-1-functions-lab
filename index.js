// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  const block = 42;
  return Math.abs(someValue - block);
}

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  const block = distanceFromHqInBlocks(someValue);
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return block * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  const distance = Math.abs(start - destination);
  return distance * 264;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else {
    fare = "cannot travel that far";
  }

  return fare;
}
