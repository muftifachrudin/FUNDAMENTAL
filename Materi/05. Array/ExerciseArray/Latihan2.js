// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (var i=number.length-1; i>= 0; i--){
//     console.log(number[i]);
// }

/*
    var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9] (length : 9)

    Math.floor(numbs.length / 2)

    var tmp = 1

    value pertama : value yang akan disimpan ke dalam variabel tmp
        1 2 3 4

    value kedua : value yang langsung menempati index milik value pertama
        5 6 7 8

    index value pertama : 0 1 2 3  ==> i = 0; i<4; i++?

    index value kedua :   7, 5, 6, 4 ==> nums.length - 1 - i

    
    */
   // Length : 8
//    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//    //  stop : 4
//    var stop = Math.floor(number.length / 2)

//     //  i : 0 1 2 3
//    for (var i = 0 ; i < stop ; i++){

//         var firstIndex = i
//         var secondIndex = number.length - 1 - i
       
//     //    1. Pindahkan value pertama ke variabel tmp
//         var tmp = number[firstIndex]
//     //    2. Pindahkan value kedua ke index milik value pertama
//         number[ firstIndex ] = number[secondIndex]
//     //    3. Pindahkan value pada variabel tmp ke index milik value kedua
//         number[ secondIndex ] = tmp
// }

// console.table((number));