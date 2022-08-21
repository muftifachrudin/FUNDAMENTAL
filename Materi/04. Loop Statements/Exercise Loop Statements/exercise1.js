///////////////////////////////////////////\
//baris ke 5 : * * * * *
//baris ke 4 : * * * *
//baris ke 3 : * * *
//baris ke 2 : * * 
//baris ke 1 : *

// var stars = ''
// var rows = 5

// // i=5-1
// // loop i menentukan banyak nya baris
// for(var i = rows ; i >= 1 ; i--){
//     // loop j menentukan banyaknya bintang per baris
//     for(var j = 1 ; j <= i ; j++){
//         // menambahkan satu bintang dari nilai sebelumnya
//         stars += '*'
//     }
//     // menambahkan satu new-line dari nilai sebelumnya
//     stars += '\n'
// }

// // menampilkan hasil akhir
// console.log(stars);

// var stars = ''
// var rows = 5

// // i=5-1
// // loop i menentukan banyak nya baris
// for(var i = rows ; i >= 1 ; i--){
//     // loop j menentukan banyaknya bintang per baris
//     for(var j = 1 ; j <= i ; j++){
//         // menambahkan satu bintang dari nilai sebelumnya
//         stars += '*'
//     }
//     // menambahkan satu new-line dari nilai sebelumnya
//     stars += '\n'
// }

// // menampilkan hasil akhir
// console.log(stars);

///////////////////////////////////////////
//baris ke 1 : *
//baris ke 2 : * * 
//baris ke 3 : * * *
//baris ke 4 : * * * *
//baris ke 5 : * * * * *
// var stars = ''
// var rows = 5

// // i=5-1
// // loop i menentukan banyak nya baris
// for (var i = 1 ; i <= rows ; i++){
    
//     for (var j = 1 ; j <= i ; j++){
        
//         stars += '*'
        
//     }
//     stars += '\n'
// }

//baris ke 5 : * * * * *
//baris ke 4 : * * * *
//baris ke 3 : * * *
//baris ke 2 : * * 
//baris ke 1 : *

// for(var i = rows ; i >= 1 ; i--){
//     // loop j menentukan banyaknya bintang per baris
//     for(var j = 1 ; j <= i ; j++){
//         // menambahkan satu bintang dari nilai sebelumnya
//         stars += '*'
//     }
//     // menambahkan satu new-line dari nilai sebelumnya
//     stars += '\n'
// }



// menampilkan hasil akhir
console.log(stars);



///////////////////////////
// Double Right Triangle
//baris ke 5 : * * * * *
//baris ke 4 : * * * *
//baris ke 3 : * * *
//baris ke 2 : * * 
//baris ke 1 : *

// var stars = ''
// var rows = 5

// for (var i = rows ; i >= 1 ; i--){

//     for (var j = 1 ; j <= i ; j++){

//         stars += ' * '

//     }
//     stars += '\n'
// }

//baris ke 1 : *
//baris ke 2 : * * 
//baris ke 3 : * * *
//baris ke 4 : * * * *
//baris ke 5 : * * * * *

// for (var i = 1 ; i <= rows ; i++){

//     for (var j = 1 ; j <= i ; j++){

//         stars += '*'

//     }
//     stars += '\n'
// }

// console.log(stars);

///////////////////
// PYRAMID TRIANGLE
///////////////////

//1.     s s s s * 
//2.     s s s * * * 
//3.     s s * * * * * 
//4.     s * * * * * * * 
//5.     * * * * * * * * *

// rows                 : 5
// posisi baris ( i )   : 1 2 3 4 5 
// jumlah spasi ( j )   : 4 3 2 1 0 (rows - i)
// jumlah bintang ( k ) : 1 3 5 7 9 

//  rows : 5
// ( i ) ( form ) ( * ) ==> (i - 1) * 2 + 1
//   1     0 1 0    1
//   2     1 1 1    3
//   3     2 1 2    5
//   4     3 1 3    7
//   5     4 1 4    9


// var stars = ''
// var rows = 5

// for (var i = 1 ; i <= rows ; i++) {

//     for (var j = (rows - i) ; j >= 1 ; j--){

//         stars += '   '
//     }

//     for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++){

//         stars += ' * '

//     }
//     stars += '\n'
// }

// console.log(stars);

///////////////////
// PYRAMID TRIANGLE
///////////////////

//5.     * * * * * * * * *
//4.     s * * * * * * * 
//3.     s s * * * * * 
//2.     s s s * * * 
//1.     s s s s * 

// jumlah spasi ( j ) = rows - 1
// jumlah bintang ( k ) = (i - 1) * 2 = 1

// var stars = ''
// var rows = 5

// for (var i = rows ; i >= 1 ; i--) {

//     for (var j = (rows - i) ; j >= 1 ; j--){

//         stars += '   '
//     }

//     for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++){

//         stars += ' * '

//     }
//     stars += '\n'
// }

// console.log(stars);


///////////////////
// DOUBLE PYRAMID TRIANGLE
///////////////////

//1.     s s s s * 
//2.     s s s * * * 
//3.     s s * * * * * 
//4.     s * * * * * * * 
//5.     * * * * * * * * *

var stars = ''
var rows = 5

for (var i = 1 ; i <= rows ; i++) {

    for (var j = (rows - i) ; j >= 1 ; j--){

        stars += '   '
    }

    for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++){

        stars += ' * '

    }
    stars += '\n'
}

for (var i = rows ; i >= 1 ; i--) {

    for (var j = (rows - i) ; j >= 1 ; j--){

        stars += '   '
    }

    for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++){

        stars += ' * '

    }
    stars += '\n'
}

console.log(stars);

//5.     * * * * * * * * *
//4.     s * * * * * * * 
//3.     s s * * * * * 
//2.     s s s * * * 
//1.     s s s s * 

