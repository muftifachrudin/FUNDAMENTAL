
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
    let aPoints = 0;
    let bPoints = 0;

    for (let i=0; i < 3; i++){
        if(a[i] > b[i]){
            aPoints++
        }
        if (b[i] > a[i]){
            bPoints++
        }
    }
    return [aPoints, bPoints]
}
