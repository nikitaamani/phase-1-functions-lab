function distanceFromHqInBlocks(pickupBlock){
    const destionationBlock= 42;
    if (pickupBlock > destionationBlock){
        return pickupBlock - destionationBlock;
    }else {
        return destionationBlock - pickupBlock;
    }
}
function distanceFromHqInFeet(pickupBlock){
    const distanceInBlocks = distanceFromHqInBlocks(pickupBlock);

    return distanceInBlocks * 264;
}
function distanceTravelledInFeet(pickupBlock, destionationBlock){
    if (pickupBlock > destionationBlock){
        return (pickupBlock - destionationBlock) * 264;
    }else{
        return (destionationBlock - pickupBlock) * 264;
    }
}
        function calculatesFarePrice(pickup, destinationBlock) {
            const totalFeetTravelled = distanceTravelledInFeet(pickup, destinationBlock);
          
            if (totalFeetTravelled <= 400) {
              return 0;
            } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000){
              const excessFeet = totalFeetTravelled - 400;
              return excessFeet * 0.02;
            } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500){
              return 25.0;
            } else{
              return "cannot travel that far";
            }
          }