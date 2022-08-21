//////////////
// FIZZ BUZZ
//////////////

/*
    Jika suatu angka dapat dibagi 3. Gantikan dengan kata Fizz
    
    Jika suatu angka dapat dibagi 5. Gantikan dengan kata Buzz
    
    Jika suatu angka dapat dibagi 3 dan 5. Gantikan dengan kata FizzBuzz



    Jika kita ingin mencari nilai yang dapat dibagi oleh dua angka angka tertentu, maka bagi lah dengan 
    angka hasil perkalian dari dari dua nilai tersebut

    FizzBuzz akan muncul saat suatu angka dapat dibagi 15
*/

// 1 2 Fizz 4 Buzz Fizz 7 8 9 10 11 12 13 14 FizzBuzz


var number = 50

for (var i = 1 ; i <= number ; i++){
    
    if (i % 15 == 0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0){
        console.log('Fizz')
    } else if(i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }

}