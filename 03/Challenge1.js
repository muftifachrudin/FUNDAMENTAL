// Even/Odd (Tidak Boleh menggunakan .split)
// Ex. Input : '3-10-9-1-55'
//     Output : 'Total Bilangan Genap : 1 & Total Bilangan Ganjil : 4

// step 
// 1. tentukan inputan
// 2. Ambil bilangan dari kiri ke kanan

let number = '3-10-9-1-55'
let newNumber = ''
let totalGenap = 0
let totalGanjil = 0

for (let i = 0 ; i < number.length ; i++){ // 0<11? True
    if(number[i] === '-'){
        // kita cek, apakah bilangannya ganjil/genap
        if(newNumber % 2 === 0){
            totalGenap++
        }else{
            totalGanjil++
        }
        // reset newNumber
        newNumber = ''
            
    }else if(i === number.length-1){
        newNumber += number [i] // 5=5 = 55 (string)
        // cek apakah bilangannya genap/ganjil
        if(newNumber % 2 === 0){
            totalGenap++
        }else{
            totalGanjil++
        }
    }else{
        newNumber += number[i]    
    }
}

console.log(`Total Bilangan Genap : ${totalGenap} dan Total Bilangan Ganjil : ${totalGanjil}`);
