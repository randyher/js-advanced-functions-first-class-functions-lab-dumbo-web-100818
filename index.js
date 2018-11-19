const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = function(num){
  output = function (multiplier){
    return num * multiplier
  }
  return output
}

const fareDoubler = function(createFareMultiplier){
  return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier){
  return createFareMultiplier * 3
}

const fetchSpecifiedDrivers = function (driversArray, func){
  return func(driversArray)
}
