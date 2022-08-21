/////////////////////////
//Drawing Horisontal Line
/////////////////////////

var stars = ''

for (var i = 0 ; i < 5 ; i++){
    stars += '*'
}

console.log(stars);

/////////////////////////
//Drawing Vertikal Line
/////////////////////////

var stars = ''

for (var i = 0 ; i < 5 ; i++){
    stars += '*' + '\n'
}

console.log(stars);

/////////////////////////
//Drawing Square
/////////////////////////

var stars = ''
var rows = 3

for (var i = 0 ; i < rows ; i++){
    for(var j = 0 ; j < rows ; j++){
        stars += '*'
    }
    stars += '\n'
}

console.log(stars);

/////////////////////////
//Drawing Triangle (Siku-Siku)
/////////////////////////

var stars = ''
var rows = 5

for (var i = 1 ; i <= rows ; i++){
    for(var j = 1 ; j <= i ; j++){
        stars += '*'
    }
    stars += '\n'
}

console.log(stars);