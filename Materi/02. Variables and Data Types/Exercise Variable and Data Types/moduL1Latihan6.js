var velocity = 600
var velocityT = 80
var velocityB = 120
var startTimeHours = 18
var startTimeMinutes = 0
var startTimeSeconds = 0

var totalVelocity = velocityT + velocityB

var needTimeHours = velocity / totalVelocity
var needTimeMinuetes = needTimeHours * 60
var needTimeSeconds = needTimeMinuetes * 60

var meetTimeHours = startTimeHours + Math.floor(needTimeMinuetes / 60)
var meetTimeMinuetes = startTimeMinutes + (needTimeMinuetes % 60)
var meetTimeSeconds = startTimeSeconds + (needTimeSeconds % 60)


var stringWAktu = `Mobil A dan B akan bertabrakan pada Pukul ${meetTimeHours} : ${meetTimeMinuetes} : ${meetTimeSeconds} WIB`
console.log(stringWAktu);