//1. Simple Array Sum
// function simpleArraySum(ar) {
//     let total = 0
//     for(let i=0; i<ar.length; i++){
//         total += ar[i]
//     }
//     return total
// }
// console.log(simpleArraySum([1, 2, 3]));

//2. Compare Triplet
function compareTriplets(a, b) {
    let totalPoint = [0, 0]
    for(let i=0; i<a.length; i++){
        if(a[i] > b[i]){
            totalPoint[0] += 1
        }else if(a[i] < b[i]){
            totalPoint[1] += 1
        }
    }
    return totalPoint
}
console.log(totalPoint);

//3. Grading Students
function gradingStudents(grades){
    let newGrades = []

    for(let i=0; i<grades.length; i++){
        newGrades.push(grades[i])
        continue;
    }

    grade
}