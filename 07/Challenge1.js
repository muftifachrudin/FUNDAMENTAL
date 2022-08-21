// isPrime?
// Buatlah function untuk menentukan bilangan prima atau bukan

// Ex, Input : 2
//      Result : ["1 x 2"] = Prime
// Ex, Input : 10
//      Result : ["1 x 10", "2 x 5", "5 x 2"] = Is not Prime

// let prime = '2, 3, 5, 7, 11, 13, 17, 19, 23, 29'

// function factor(m) {
//     let factor = []

//     if(m === 1 || m === 2) {

//     }
// }

// function prime(n){
//     if (n === 1){
//         return false;
//     }else if (n === 2){
//         return true;
//     }else {
//         for(var x = 2; x < n; x++){
//             if(n % x === 0){
//                 return false
//             }
//         }
//         return true
//     }
// }

// console.log(prime(13));


// correct

function isPrime(number) {
    let arrPrime = []
    let isPrime

    for(let i=1; i<number; i++){
        if(number % i === 0){
            arrPrime.push(i)
        }
    }

    if(arrPrime.length === 2){
        console.log(`Bilangan ${number} Merupakan Bilangan Prima`);
    }else{
        console.log(`Bilangan ${number} Bukan Merupakan Bilangan Prima`);
    }
}

isPrime(97)

