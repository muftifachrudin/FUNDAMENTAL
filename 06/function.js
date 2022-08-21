// Function
// Block of code yang bisa kita gunakan secara berulang-ulang

// Tahapan membuat function:
// 1. Build 
// 2. Call 

// Tipe function:
// 1. Function Declaration
// printPesan()
function printPesan(){
    console.log('Hello World!')
}


// 2. Function Expression
var cetakPesan = function(){ // ---> Anonymous Function
    console.log('Hai, Dunia!')
}
// cetakPesan()


// 3. Arrow Function
let buatPesan = () => { // ---> Anonymous Function
    console.log('Purwadhika')
}

// buatPesan()


// ### Function with Parameter
let penjumlahan = (angka1, angka2 = 10) => {
    // angka1 = 5
    //angka2 = 10
    console.log(angka1 + angka2) // 15
}

// penjumlahan(5, 10) // 5 & 10 argument ---> Direct argument

let x = 25
let y = 100
// penjumlahan(x, y) // angka1 & angka2 argument ---> Indirect argument
// penjumlahan(100, 15)



// Function with Return & without Return (Function yg menghasilkan sesuatu & function yg hanya menjalankan sesuatu)
let perkalian = (angka1, angka2) => {
    let result = angka1 * angka2 
    console.log(result)
    return result 
}

let pembagian = (angka1, angka2) => {
    let result = angka1 / angka2 
    console.log(result)
}

let resultPerkalian = perkalian(10, 10)
let resultPembagian = pembagian(10, 5)
console.log(resultPerkalian)
console.log(resultPembagian)



// ### Callback Function
// Function yang dijadikan argument untuk function lainnya

// 1. Indirect CB Function
// let pengurangan = (num1, num2) => {
//     // num1 = 10
//     // num2 = 5
//     return num1-num2
// }

// let calculator = (angka1, angka2, cb) => {
//     // angka1 = 10
//     // angka2 = 5
//     // cb = pengurangan
//     return cb(angka1, angka2)
// }

// console.log(calculator(10, 5, pengurangan))

// 2. Direct CB Function
let calculator = (angka1, angka2, cb) => {
    // angka1 = 10
    // angka2 = 5
    // cb = pengurangan
    return cb(angka1, angka2)
}

console.log(calculator(10, 5, (num1, num2) => {
    // num1 = 10
    // num2 = 5
    return num1-num2
}))



