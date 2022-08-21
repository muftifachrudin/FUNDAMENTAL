// Buatlah program untuk men=generate bilangan acak dari 1-100
// dan tentukan apakah bilangan  yang muncul merupakan bilangan ganjil/genap

// Ex. angkaRandom : 10
//      result     : "Angka 10 Merupakan Bilangan Genap"
// step:
// 1. Mendapatkan angka randomnya terlebih dahulu
// 2. Buat pengkondisian untuk menentukan bilangan tersebut ganjil/genap


let angkaRandom = Math.round((Math.random() * 100)*1);
console.log(angkaRandom)

let bilangan
if (angkaRandom % 2 == 0){
    bilangan = "Genap"
}else {
    bilangan = "Ganjil"
}

// === -> Mengecek value dan tipe data
// == -> Mengecek value
console.log(10 == '10');
console.log('10' === 10);


let result =`Angka ${angkaRandom} Merupakan bilangan ${bilangan}`

console.log(result);
