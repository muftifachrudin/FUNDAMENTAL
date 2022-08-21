
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    let aPoint = 0
    let bPoint = 0

    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            aPoint++
        }if(a[i] > b[i]){
            bPoint++
        }
    }
    return [aPoint, bPoint]

}
let result = compareTriplets([17, 28, 30], [99, 16, 8])
console.log(result);