// Persistance
// Ex. 39   : 3x9 = 27 -> 2x7 = 14 -> 1x4 = 4 ---> Return 3x
//     999  : 9x9x9 = 729 -> 7x2x9 = 126 -> 1x2x6 = 12 -> 1x2 = 2 ---> Return 4x

let angka = 39
angka = angka.toString() // "39"
let tempAngka = 1 
let totalKali = 0

while(angka.length > 1){ // 2>1? true
    for(let i=0; i<angka.length; i++){
        tempAngka *= angka[i] // i=0 tempAngka = 1x3 = 3; i=1 tempAngka = 3x9 = 27;
    }
    
    totalKali++ // totalKali = 0 -> 1
    angka = tempAngka.toString() //angka "39" -> angka "27"
    tempAngka = 1 // tempAngka 27 -> tempAngka 1
}

console.log(totalKali)