// IF ELSE, ELSE IF STATEMENTS

// if(condition1){
//     // condition1 : true
//     // task1
// } else if(condition2){
//     // condition2 : true
//     // task2
// } else if(condition3){
//     // condition3 : true
//     // task3
// } else {
    // condition : false
// }

// Nilai Ujian 
// Points : null : F

var points = 68
var grade 

    // Points : 85 - 100 : A
    // 101
    // True, False karena and && hasilnya False
if(points >= 85 && points <=100){
    grade = "A"
    
    // Points : 75 - 84 : B
} else if(points >= 75 && points <=84){
    grade = "B"
    
    // Points : 60 - 74 : C
} else if(points >= 60 && points <=74){
    grade = "C"

    // Points : 0 - 59 : D
} else if(points >= 0 && points <=59){
    grade = "D"

} else {
    grade = "F"
}

console.log(`Nilai : ${points}\nGrade : ${grade}`);
