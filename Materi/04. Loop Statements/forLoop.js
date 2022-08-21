/////////
//FOR LOOP
//////////

/*
    1. Membuat variabel sebagai acuan (init)
    2. Mengevaluasi condition
        a. true : menjalankan task (langkah - 3)
        b. false : keluar dari loop
    3. Menjalankan task
    4. Menjalankan modification, kembali ke langka - 2
*/

// init, condition, task, modification

// for (init ; condition ; modification) {

//     task 

// }

//////////////////////////
// Menampilkan angka 1- 5
//////////////////////////

// for (var i = 1 ; i <= 5 ; i++) {

//     console.log(`Number : ${i}`);

// }

//////////////////////////
// Menampilkan angka Genap
//////////////////////////

// for (var i = 0 ; i <= 10 ; i++) {

//     if(i % 2 == 0)

//     console.log(`${i} adalah GENAP`);
// }

// //////////////////////////
// // Menampilkan angka Genjil
// //////////////////////////

// for (var i = 3 ; i <= 10 ; i++) {

//     if(i % 2 == 1)

//     console.log(`${i} adalah GANJIL`);
// }

//////////////////////////
// Menampilkan angka Genjil
//////////////////////////

for (var i = 3 ; i <= 10 ; i++) {

    if(i % 2 == 1) {
        console.log(`${i} adalah GANJIL`);
    } else {
        console.log(`${i} adalah GENAP`);

    }
}
