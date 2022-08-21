// 0.0 - 0.999
var bilanganAcak = Math.random()
// 0 - 99.9
var ratusRandom = bilanganAcak * 100
// 0 - 99
var randomFloor = Math.floor(ratusRandom)
// 1 - 100
var randomFinal = randomFloor + 1

// console.log(randomFinal);
document.write(`<h1> ${randomFinal} </h1>`)


