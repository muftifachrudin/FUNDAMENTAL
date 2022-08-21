////////////
// FUNCTION
////////////

/*
    Block kode :
    1. Memiliki nama
    2. Dapat digunakan secara berulang
    3. Dapat memiliki input dan output
    
    Note :
    1. Input adaalah proses dimana kita dapat memberikan value kepada function untuk digunakan
    2. Output adalah proses yang dilakukan oleh function dalam menghasilkan value sehingga dapat disimpan di variable

*/

/* 
    keyword 'function' + nama + () + {}

    () -> Tempat menulis parameter

    parameter -> variabel tempat menyimpan input,

    {} -> Tempat menulis task yang akan dikerjakan saat function dijalankan

*/

/* Function Declaration */

// function firstStep() {
//     var name = "Ethan"
//     console.log(
//         `Segala Sesuatu yang besar, selalu dimulai dari satu langkah kecil ${name}`
//     );
// }

// firstStep();
// firstStep();
// firstStep();

// /* Function Expression */

// var keepGoing = function() {
//     console.log(`Apapun yang terjadi, teruslah melangkah`);
// }

// keepGoing()

/* Perbedaan Keduanya */

/* Hoisted */

leaf();

function leaf() {
  console.log(`Hijau Daun`);
}

/* Not Hoisted */

leaf();

var leaf = function () {
  console.log(`Hijau Daun`);
};

////////////////////
/* ARROW FUNCTION */
////////////////////

/* ES6 */

/* Function Expression (Basic) */
var earth = function () {
  console.log("Selamatkan Bumi");
};

/* Function Expression (Arrow) */
var earth = () => {
  console.log("Selamatkan Bumi");
};
