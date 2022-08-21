// The Most (Looping Only!)
// Buatlah program untuk mencari jumlah huruf yang muncul pada suatu kata/kalimat
// Ex. Input    : "RRI"
//     Result   : 'Huruf R paling banyak muncul sebanyak 2 kali'

let input = 'RRI'
let totalHuruf = 0
let huruf = ''

for(let i=0; i<input.length; i++){ // i=0 ---> i=1 ---> i=2
    let tempTotal = 0
    for(let j=0; j<input.length; j++){ // j=0 -> j=1 -> j=2
        if(input[i] === input[j]){ // R === R? tempTotal = 1 -> R === R? tempTotal = 2 -> R === I? False
            tempTotal++
        }
    }
    if(tempTotal > totalHuruf){ // 2>0? true! ---> 2>2? false! ---> 1>2? false!
        totalHuruf = tempTotal // totalHuruf = 2 ---> totalHuruf = 2
        huruf = input[i] // huruf = R ---> huruf = R
    }
}
console.log(`Dari Kalimat ${input}, Huruf yang Paling Banyak Keluar Adalah ${huruf} Sebanyak ${totalHuruf}`)