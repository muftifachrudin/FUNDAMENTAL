//////////////////////
//Break : Menghentikan proses Loop
//////////////////////////////////

///////////////
// Print 1 - 3
///////////////

// i = 1

// loop hingga 5 kali
// for (var i = 1 ; i <= 5 ; i++) {
//     // jika nilai sama dengan 4
//     if(i == 4){
//         // Menghentikan proses loop
//         break
//     }

//     // Tampilkan value pada variabel i
//     console.log(`Loop : ${i}`);
// }

////////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapat dibagi 5
////////////////////////////////////////////////////

// while(true){
//     console.log();
// }

// while(true){

//     var random = Math.floor(Math.random() * 100)

//     console.log(random);

//     if(random % 5 == 0){
//        break
//     }
// }

// for (var i = Math.random() ; i * 100 ; i++) {

//     if(i % 5 == 0){
//         break
//     }

//     console.log(`${i}`);
// }

////////////////////////////////////////////////////////////////////////////////////////////////
//CONTINUE : Mengabaikan semua proses yang ada setelah keyword ini dan lanjut ke loop berikutnya
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////
//Print 1- 10 Lewati angka yang habis dibagi 3
///////////////////////////////////////////////

for (var i = 1 ; i <= 10 ; i++){
    
    // Evaluasi Nilai i, jika habis dibagi 3 maka skip ke lopp berikutnya
    if (i % 3 == 0) {
        continue
    }

    console.log(`Print : ${i}`);
}




