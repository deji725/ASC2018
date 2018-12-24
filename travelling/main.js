// create cities
const nCities = 100
var locations = []

for(var i=0; i<nCities; i++){
    const location = [Math.random(), Math.random()]
    locations.push(location)
}

// objective
function distanceFormula(a,b){
    const xSquared = Math.pow(a[0]-b[0], 2)
    const ySquared = Math.pow(a[1]-b[1], 2)
    return Math.sqrt(xSquared + ySquared)
}

function totalDistance(indexes){
    var total = 0
    for(var i=1; i<indexes.length; i++){
        const a = locations[indexes[i]]
        const b = locations[indexes[i-1]]
        const distance = distanceFormula(a,b)
        total += distance
    }
    return total
}

// find a solution!
var solution = []
for(var i=0; i<nCities; i++){
    solution.push(i)
}

var solutionDistance = totalDistance(solution)

for(var i=0; i<1000000; i++){
    var changedsolution = randomChange(solution)
    var changedDistance = totalDistance(changedsolution)
    if(changedDistance<solutionDistance){
        solution = changedsolution
        solutionDistance = changedDistance
        console.log("Current distance", solutionDistance)
    }
}

console.log(solution)

function randomChange(indexes){
    const locationA = Math.floor(Math.random()*indexes.length)
    const locationB = Math.floor(Math.random()*indexes.length)
    var newIndexes = indexes.slice()
    newIndexes[locationA] = indexes[locationB]
    newIndexes[locationB] = indexes[locationA]
    return newIndexes
}



