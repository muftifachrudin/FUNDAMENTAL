//////////////
// DO WHILE LOOP
//////////////

/*
    Syntax

    do {

        task

    } while (condition)

*/


//////////////////////
//Menampilkan angka 1 - 5
/////////////////////////

/*
    Alur Proses Do While
    1. Membuat Variabel Init
    2. Menjalankan task, menjalankan modification
    3. Evaluasi condition
        a. condition : true, Kembali ke step 2
        b. condition : false, keluar dari block do while loop
*/

//Membuat Variabel init (init)
var number = 1
//Menjalankan Task
do {

    // Menampilkan nilai number 
    console.log(`Number : ${number}`);

    // Menjumlahkan nilai number dengan 1
    number++
// Evaluasi condition
} while (number <= 5)


////////////////////////////////////
//Menampilkan angka ganjil dan genap
////////////////////////////////////

// // Init
// var number = 3
// // Menjalankan Task
// do {

//     if (number % 2 == 0) {
//         console.log(`${number} adalah GENAP`);
//     } else {
//         console.log(`${number} adalah GANJIL`);
//     }

//     number++

// } while (number <= 10)


////////////////////////////////////
//INFINITE LOOP
////////////////////////////////////

var number = 7

do {

    console.log(`${number}`)

    number++

}while (number >= 5)