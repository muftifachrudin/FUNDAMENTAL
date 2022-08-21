///////////////
/* FIBONACCI */
///////////////

/*
    Fibonacci = pejumlahan bilangan pertama + bilangan kedua
    input = fibo(6) then output 8
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]


*/

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
console.table(numbers)

/*
    1. 1, ????
        p1 = 1, p2 = 1, p3 = p2 + p1, p4 = p3 + p2
    p5 = ? 
    p5 - 1 + p5 - 2
*/
// const fiboResult = (fibo) => {
//     var before=0;
//     var after=1;
//     for (i=0;i<=fibo;i++) {
//         after = before+after; 
        
//     }
//     console.log(after);
//     before = after;
//     return after;

// }

const fibo = ((p) => {
    if (p < 3) {
        return 1
    }else {
        return fibo(p - 1) + fibo(p - 2)
    }
})

var fibResult = fibo(10)
console.log(fibResult);


