////////////
//METHOD FOR EACH//
////////////

// for each : value on index
// var nums = ["A", "B", "C"]

// var cb = (val, idx) => {
//     console.log(`Index ke ${idx} : ${val}`);
// }

// nums.forEach(

// nums.forEach((val, idx) => {
//     console.log(`Index ke ${idx} : ${val}`);
// });

// // for Each : third argument

// var days = ["sunday", "monday", "tuesday"]

// days.forEach((val, idx, arr) => {
//     console.log(`val : ${val}`);
//     console.log(`idx : ${idx}`);
//     console.log(`arr : ${arr}`);

// })

/* For Each : multiple by two */

// var nums = [2, 5, 7]
// var result = []

// nums.forEach((val) => {
//     result.push(val * 2);
// })

// console.log(result);

/* For Each : highest and lowest */

// var nums = [2, 5, 3]
// var min, max

// nums.forEach((val, idx) => {
//     if(idx == 0){
//         min = max = val
//     } else if (val < min) {
//         min = val
//     } else if (val > max) {
//         max = val
//     }
// })

// console.log(`Min : ${min}\nMax : ${max}`);

//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat memisahkan nilai genap dan ganjil //
// [11, 22, 34, 41, 52, 63, 71, 86]                             //
// [11, 41, 63, 71] [22, 34, 52, 86]                            //
//////////////////////////////////////////////////////////////////

// var nums = [11, 22, 34, 41, 52, 63, 71, 86]
// var ganjil = []
// var genap = []

// nums.forEach((val, idx) => {
//     if(idx % 2 == 0){
//         genap = val
//         genap.push()
//     } else if(idx % 2 == 1){
//         ganjil = val
//         ganjil.push()
//     }
// })

// console.log(`${ganjil}, ${genap}`);

// var oddEven = (numbers) => {
//     var odds = []
//     var evens = []

//     numbers.forEach((number) =>{
//         if(number % 2 == 1){
//             odds.push(number)
//         } else {
//             evens.push(number)
//         }

//     })
//     return [odds, evens]
// }

// var result = oddEven([11, 22, 34, 41, 52, 63, 71, 86])
// console.log(result);
// console.table(result)

//////////////
//METHOD MAP//
//////////////

/*
    1.  Map menerima callback function
    2.  Callback function memiliki paling tidak satu parameter yang akan berisi
        data dari array. Adapun parameter kedua akan berisi array itu sendiri
    3.  Callback function harus melakukan return, nilai yang direturn sifatnya tidak
        dibatasi, boleh me-return number, string, boolean atau yang lainnya
    4.  Map akan mereturn sebuah array baru, dan tidak mengubah array aslinya
        jumlah data yang ada pada hasil map akan sama seperti data awal, namun
        bentuknya dapat berubah
*/

/*
    1.  Callback function harus me-return suatu nilai (tipe data apapun),
        dimana setiap nilai yang di-return akan masuk ke dalam array baru
        yang dibuat oleh function map secara internal, bukan karena kita
        yang menulis kodenya
    2.  Map akan me-return array baru yang sudah berisi nilai yang di-return
        oleh vallback function
*/

//return nilai
//nilai masuk ke array baru
//array baru akan di return oleh map

/* Multiple by two : for Each */
// var numbers = [1, 2, 3]
// var arrResult = []

// numbers.forEach((number)=>{
//     arrResult.push(number * 2)
// })

// console.log(`for each : ${arrResult}`);

// /* Multiple by two : Map */

// var numbers = [1, 2, 3]

// var mapResult = numbers.map((number) => {
//     return number * 2
// })

// console.log(`map : ${mapResult}`);

/* Man or Woman */
/* Mrs. */
/* Mr. */

// var persons = [
//     ["Janette", "Woman"],
//     ["Kim Shin", "Man"],
//     ["Tony", "Man"],
// ]

// var mapResult = persons.map((person) => {
//     var name = person[0]
//     if(person[1] == "Woman"){   
//         return `Mrs. ${name}`
//     }else {
//         return `Mr. ${name}`
//     }
// })

// console.log(mapResult);

/////////////////////////////////////////////////////////////////
// Sebuah Function yang dapat menentukan nilai genap dan ganjil//
// [1, 2, 3, 4]                                                //
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"]]  //
/////////////////////////////////////////////////////////////////

// var numbers = [1, 2, 3, 4]
// var oddEven = (numbers) => {
//     var numResult = numbers.map((number) => {
//         if(number % 2 == 1){       
//             return [number, "Ganjil"]
//         } else {
//             return [number, "Genap"]
//         }
//     })
//     return numResult
// }


// var oddEvenResult = oddEven(numbers)
// console.log(oddEvenResult);

///////////////////
/* MAP DUPLICATE */
///////////////////

/*
    1.  Method map membutuhkan array untuk di proses, dan callback function
        yang akan memproses setiap data dari array
    2.  Map akan menjalankan callback function sebanyak data yang ada di array
        dan stiap kali dijalankan, data pada array akan masuk secara bergantian
    3.  Callback yang masuk ke dalam map akan melakukan return niai,  dan nilai yang
        return ini akan dimasukkan ke dalam array baru
    4.  Array baru yang berisi hasil dari proses map akan di return oleh map sehingga
        hasilnya dapat disimpan ke dalam variable
*/

/* Map Duplicate : for Loop */

// var mapForLoop = (arr, cb) => {
//     // arr = [1, 2, 3]
//     // cb = (number) => (return number *2)
//     // arrMap = [2, 4, 6]
//     var arrMap = []
//     for (var i = 0; i < arr.length; i++) {
//         // cb(3)
//         arrMap.push(cb(arr[i]))
//     }

//     // arrMap = [2, 4, 6] 
//     return arrMap
// }

// var numbers = [1, 2, 3]
// var multi = (number) => {
//     return number * 2
// }

// var forLoopResult = mapForLoop(numbers, multi)
// console.log(forLoopResult);


/* map duplicate : for each | */
// var mapForEach = (arr, cb) => {
//     // arr = [1, 2, 3]
//     // cb = (number) => (return number *2)
//     // arrMap = [2, 4, 6]
//     var arrMap = []
//     arr.forEach((val) => {
//         //val = 1
//         //cb(1)
//         arrMap.push(cb(val))
//     })
    
//     // arrMap = [2, 4, 6] 
//     return arrMap
// }

// var numbers = [1, 2, 3]
// var multi = (number) => {
//     return number + 2
// }

// var forLoopResult = mapForLoop(numbers, multi)
// console.log(forLoopResult);

// var forEachResult = mapForEach(numbers, multi)
// console.log(forEachResult);

// var mapResult = numbers.map(multi)
// console.log(mapResult);

/////////////
/* FILTER */
/////////////

/*
    1.  Callback function harus me-return suatu bolean
    2.  Callback me-return true : value yang sedang diproses akan
        disimpan ke array baru
    3.  Callback me -return false : value yang sedang diproses akan diabaikan
    4.  Filter akan me-return array baru
*/

/* Odd Filter */

// var numbers = [1, 2, 3, 4, 5]

// var filterResult = numbers.filter((number) => {
//     // number
//     // arr = []
//     return number % 2 == 1 // true or false
// })

// console.log(filterResult);


/* Character Length filter (more than 5 character) */

// var words = ["Koro Sensei", "Jin Mori", "Eren", "Tanjirou", "Zorro"]

// var lenResult = words.filter((word) => {
//     // saat satu string memiliki lebih dari 5 karakter
//     return word.length > 5

// })

// console.log(lenResult);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Buatlah function yang akan memfilter seseorang yang akan memiliki umur lebih dari 30 atau tinggal di Jakarta //
// [                                                                                                            //
//      ["John", 41, "Jakarta"],                                                                                //
//      ["Baby", 21, "Jakarta"],                                                                                //    
//      ["Tony", 24, "Surabaya"],                                                                               //
//      ["Justin", 29, "Banjarmasin"],                                                                          //
// ];                                                                                                           //
// [                                                                                                            //
//      ["John", 43, "Jakarta"],                                                                                //
//      ["Baby", 21, "Jakarta"],                                                                                //
//      ["Tony", 34, "Surabaya"],                                                                               //
// ]                                                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var persons = [                                                                                                           //
//     ["John", 41, "Jakarta"],                                                                                //
//     ["Baby", 21, "Jakarta"],                                                                                //    
//     ["Tony", 34, "Surabaya"],                                                                               //
//     ["Justin", 29, "Banjarmasin"],                                                                          //
// ];                                                                                                           //

// var ageAddress = (arr) => {
//     //  val = ["Justin", 29, "Banjarmasin"] -- false
//     /*
//         arr = [
//             ["John", 41, "Jakarta"] -- true
//             ["Baby", 21, "Jakarta"] -- true
//             ["Tony", 24, "Surabaya"] -- true
//         ]
//     */
//     return arr.filter((val) => {
//         return val[1] > 30 || val[2] == "Jakarta"
//     })
// }

// var result = ageAddress(persons)
// console.table(result)


//////////////////////
/* FILTER DUPLICATE */
//////////////////////

/* Filter : for Loop */
// var filterForLoop = (arr, cb) => {
//     //arr=number = [1, 23, 31, 20, 48]
//     //cb=odd = (val) => { return val $ 2 == 1}
//     var arrLoop = [];
    
//     for(var i=0; i < arr.length; i++){
//         var isTrue = cb(arr[i])
        
//         if(isTrue){
//             arrLoop.push(arr[i])
            
//         }
//     }
    
//     return arrLoop
// }

// var number = [1, 23, 31, 20, 48]
// var odd = (val) => {
//     return val % 2 == 1
// }

// /* Filter : for each */
// var filterForEach = (arr, cb) => {
//     //arr=number = [23, 20]
//     //cb=odd = (val) => { return val $ 2 == 1}
//     var arrForEach = []
    
//     //val = 20
//     arr.forEach((val) => {
//         //cb(1)
//         if(cb(val)) {
//             arrForEach.push(val)
//         }
//     })

//     return arrForEach
// }

// var number = [23, 20]
// var odd = (val) => {
//     return val % 2 == 1
// }

// var forLoopResult = filterForLoop(number, odd)
// console.log(forLoopResult);

// var forEachResult = filterForEach(number, odd)
// console.log(forLoopResult);




/////////////////////
/* SORT (Advanced) */
/////////////////////

/* String */
// var words = ["red", "apple", "rain", "cat", "green"]

// words.sort()

// console.log(words);

/* Number */
var numbers = [23, 47, 13, 3, 9, 240]

/* 
    1.  Callback function memiliki dua parameter

    2.  Callback function harus me-return nilai dari salah satu kondisi
        a.  return < 0, a akan berada sebelum b
        b.  return 0, posisi a dan b tidak berubah
        c.  return > 0, b akan berada sebelum a
*/

// var asc = (a, b) => {
//     // 23 - 47
//     // dengan menggunakan
//     return a - b
// }
// var dsc = (a, b) => {
//     return b - a
// }

// numbers.sort(dsc)

// console.log(numbers);


/////////////////////////////////////////////////////////////////////////////////////////////////////
// Buatlah function yang akan mensorting array 2 Dimensi ini berdasarkan nama, dan umur (ascending)//
// var persons = [                                                                                 //
//      ["John", 44],                                                                              //
//      ["John", 23],                                                                              //    
//      ["Baby", 21],                                                                              //
//      ["Justin", 29],                                                                            //
// ];                                                                                              //                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////

/* Clue : comparison between character */
// tabel ascii
// 65 > 66 : false
// console.log("A" > "B")

// A : 65 < a : 97 : true
// console.log("Alvin" < "alvin")


var persons = [                                                                                                            
     ["John", 44],                                                                                
     ["John", 43],                                                                                
     ["Baby", 21],                                                                               
     ["Justin", 29],                                                                          
];

var personsSort = (arr) => {
    /* 
    arr =   [                                                                                                            
     ["John", 44],                                                                                
     ["John", 43],                                                                                
     ["Baby", 21],                                                                               
     ["Justin", 29],                                                                          
    ];

    */
   
   
   arr.sort((a, b) => {
       // a = ["John", 43]
       // b = ["Baby", 21]

       var nameA = a[0]
       var nameB = b[0]

       if(nameA < nameB) {
            return -1
        } else if(nameA > nameB) {
            return 1
        } else {
            return a[1] - b[1]
        }
    })

    return arr
}

var result = personsSort(persons)
console.table(result);

// ascending return a - b
// descending descending b - a

/*
    Variable :
    1.  VAR = function () {}
        Mutable (status yang menunjukan apakah data dapat diubah atau tidak) = true
        Scope = dapat diakses dari manapun / global variable, juga bisa didapat didalam function

    2.  LET = function () {}, for () {}, if () {}
        Mutable = true
        Scope = dibatasi oleh function, loop, condition / bukan global variable, local variable

    3.  CONST = function () {}, for () {}, if () {}
        Mutable = false (tidak dapat merubah data)
        Scope = dibatasi oleh function, loop, condition

*/

/*
    Variable Scope : Cakupan wilayah yang dimiliki oleh variabel

    Global scope : dapat diakses dari manapun
    Local scope : Memiliki ruang terbatas untuk diakses (function scope dan block scope)

*/

/*
    VAR
    1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dalam function itu saja
    2. Block scope : Saat dibuat didalam kurang kurawal (if, switch, for, while, do while)
    
    Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama 

*/
/*
    LET
    1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dalam function itu saja
    2. Block scope : Saat dibuat didalam kurang kurawal (if, switch, for, while, do while)
    
    Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama 

*/
/*
    CONST
    1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dalam function itu saja
    2. Block scope : Saat dibuat didalam kurang kurawal (if, switch, for, while, do while)
    
    Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama 
    - Nilai yang disimpan tidak dapat diubah

*/