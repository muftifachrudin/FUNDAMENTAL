// The Most (Looping Only)
// Buatlah program untuk mencari jumlah huruf yang muncul pada suatu kata / kalimat

// Ex : "Purwadhika"
//      "Huruf a paling banyak muncul sebanyak 2 kali"

let input = 'RRI'
let totalHuruf = 0
let huruf = ''

for(let i=0; i<input.length; i++){ // i=0, i=1, i=2

    let tempTotal = 0

    for(let j=0; j<input.length; j++){ // j=0, j=2 , j=2
        if(input[i] === input[j]){ // R === R? TempTotal = 1, R === R? tempTotal = 2, R === 1? False
            tempTotal++
        }
    }
    if (tempTotal > totalHuruf){ // 2>0 true, 2>2 false, 1<2 true
        totalHuruf = tempTotal // totalhuruf = 2 
        huruf = input [i] // huruf = 8
    }
}

console.log(`Dari Kalimat ${input}, Huruf yang paling banyak keluar adalah ${huruf} sebanyak ${totalHuruf}`);
