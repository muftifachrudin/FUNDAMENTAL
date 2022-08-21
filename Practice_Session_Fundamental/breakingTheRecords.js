
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let low = scores[0];
    let high = scores[0];
    let hRes = 0;
    let lRes = 0;
    scores.forEach(score => {
        if(score < low){
            low = score;
            lRes++;
        }else if(score>high){
            high = score;
            hRes++
        }
        
    });

    return [hRes, lRes]
}

console.log(breakingRecords([12, 24, 10, 24]));