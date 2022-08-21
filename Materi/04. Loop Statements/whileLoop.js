// LOOP STATEMENTS

//////////////
// WHILE LOOP
/////////////

/*
    Aturan Utama
    Berlaku untuk segala jenis loop : while, do while, for

    "Selama 'condition' bernilai true, maka 'task' yang ada pada Loop akan dikerjakan"
/*
    ALur Proses
    
    Alur A : While dan For

    Alur B : Do While
*/    

/*
    Syntax
    While (condition) {

        task
    }
*/

////////////////
// Menampilan angka 1-5
///////////////

/* 
    Alur Proses While Loop

    1. Membuat Variable dengan nilai awal, digunakan sebagai acuan loop (Init)
    2. Mengevaluasi condition (condition)
        a. condition : true, memproses task yang ada
        b. condition : false, keluar dari block loop
    3. Setelah menyelesaikan task yang ada di dalam block loop, memodifikasi nilai pada variabel Init
    4. Kembali ke Langkah 2

*/

// //Init
// var number = 1
// // condition
// while (number <= 5) {

//     console.log(`number : ${number}`);

//     number++

// }

// console.log("Selesai Loop");

////////////
//Dua Langkah
////////////

// // Membuat Variabel init
// var number = 1
// // Mengevaluasi condition
// while (number >= 10) {

//     // Menampilkan informasi pada terminal / console
//     console.log(`Number : ${number}`);

//     // Menjalankan 'number' ditambah dua
//     number += 2

//     // Kembali mengevaluasi dari loop
// }

// console.log("Selesai Loop");

///////////////////////////
// Menampilkan nilai Genap
//////////////////////////

// Nilai genap adalah nilai yang "habis' dibagi dua"
// Jika di Modulus dua, hasilnya adalah nol

// init
var number = 0
// condition
while (number <= 10) {

    // Evaluasi nilai, apakah merupakan bilangan genap
    // jika setelah dimoduluslan 2 menghasilkan nol, maka nilai tsb termasuk bilangan genap
    if(number % 2 == 0){
        // Menampilkan Bilangan genap pada console/terminal
        console.log(`${number} adalah bilangan genap`);
    }
    // modification
    // Menjumlahkan 'number' dengan satu
    number++

}

// dijalankan setelah keluar dari loop
console.log('Selesai Loop');

///////////////////////////
// Menampilkan nilai Ganjil
//////////////////////////

// // Nilai ganjil adalah nilai yang sisa satu saat dibagi dua"
// // Jika di Modulus dua, hasilnya adalah satu

// // init
// var number = 3
// // condition
// while (number <= 10) {

//     // Evaluasi nilai, apakah merupakan bilangan ganjil
//     // jika setelah dimoduluslan 2 menghasilkan satu, maka nilai tsb termasuk bilangan ganjil
//     if(number % 2 == 1){
//         // Menampilkan Bilangan genap pada console/terminal
//         console.log(`${number} adalah bilangan ganjil`);
//     }
//     // modification
//     // Menjumlahkan 'number' dengan satu
//     number++

// }

// // dijalankan setelah keluar dari loop
// console.log('Selesai Loop');

/////////////////////////
///Menampilkan nilai Ganjil dan Genap
/////////////////////////////////////

var number = 0

while (number <= 5) {
    
    if(number % 2 == 1) {

        console.log(`${number} adalah GANJIL`);
        
    } else {
        
        console.log(`${number} adalah GENAP`);
    }

    number++
}


