
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        const round = Math.ceil((grade + 1) / 5) * 5
        return (round - grade < 3) && grade >= 38 ? round : grade;
    })
}
