// SWITCH CASE
// Mirip dengan if, else if, else

// if(condition1){
//     // condition1 : true
//     // task1
// } else if(condition2){
//     // condition2 : true
//     // task2
// } else if(condition3){
//     // condition3 : true
//     // task3
// } else {
//     // block else akan dijalankan, sama semua condition bernilai false
//     // Task Else
// }

// // 1. Dapat memiliki condition lebih dari satu
// // 2. Terdapat block code yang akan dijalankan saat semua condition bernilai false (else)

// // Menyamakan nilai yang disimpan oada variabel "key" dengan "value" yang ada pada "case"

var tech = "HTML";
switch (tech) {
  case "HTML":
    // Task 1
    console.log("HTML berfungsi untuk membuat kerangka website");
    break;

  case "CSS":
    // Task 2
    console.log("CSS berfungsi untuk mengatur style website");
    break;

  case "Javascript":
    // Task 4
    console.log("Javascript berfungsi untuk mengolah data");
    break;

  default:
    // Task Default
    console.log(`Informasi mengenai ${tech} tidak ditemukan`);
    break;
}

console.log("Keluar dari Switch");

var number = 7;
switch (true) {
  case number % 2 == 0:
    console.log(`${number} merupakan bilangan GENAP`);
    break;

  default:
    console.log(`${number} merupakan bilangan GANJIL`);
}
