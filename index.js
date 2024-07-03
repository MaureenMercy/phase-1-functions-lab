function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
// Scuber HQ is on 42nd Street
const HQ_BLOCK = 42;
const FEET_PER_BLOCK = 264;

function distanceFromHqInBlocks(pickupBlock) {
  return Math.abs(pickupBlock - HQ_BLOCK);
}

function distanceFromHqInFeet(pickupBlock) {
  return distanceFromHqInBlocks(pickupBlock) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * FEET_PER_BLOCK;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}