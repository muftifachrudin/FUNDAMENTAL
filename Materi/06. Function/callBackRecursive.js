///////////////////////
/* CALLBACK FUNCTION */
///////////////////////

// var addition = (num1, num2) => {
//   return num1 + num2;
// };

// var multiplication = (num1, num2) => {
//   return num1 * num2;
// };

// /* calculator */

// var calculator = (a, b, cb) => {
//   // a = 2
//   // b = 5
//   // cb = addition
//   return cb(a, b);
// };

// // var result = calculator(2, 5, multiplication);
// // console.log(result);

// /* ARRAY CALCULATOR */

// var numbers = [23, 12, 39];

// var arrCalculator = (arr, operand, cb) => {
//   // arr = [23, 12, 39]
//   // operand = 2
//   // cb =  addition
//   var arrResult = [];
//   var operationResult;

//   // i = 0
//   // arr.length = 3
//   // arrResult = [25, 14, 41]
//   for (var i = 0; i < arr.length; i++) {
//     //arr[i] = 39
//     operationResult = cb(arr[i], operand);
//     arrResult.push(operationResult);
//   }
//   // arrResult = [25, 14, 41]
//   return arrResult;
// };

// var result = arrCalculator(numbers, 2, addition);
// // var result = calculator(2, 5, NaN);
// console.log(result);

/////////////////////////////
/* CALLING OTHER FUNCTION */
/////////////////////////////

/* sebuah function dapat memanggil function lainnya secara langsung */

// var first = () => {
//   console.log("First");
// };

// var second = () => {
//   console.log("Second");
// };

// second();

// var add = (a, b) => {
//   return a + b;
// };
// var sub = (a, b) => {
//   return a + b;
// };
// var mul = (a, b) => {
//   return a + b;
// };

// var calculator = (num1, num2, operation) => {
//   if (operation == "add") {
//     return add(num1, num2);
//   } else if (operation == "sub") {
//     return sub(num1, num2);
//   } else {
//     return mul(num1, num2);
//   }
// };

// calculator(2, 3, "add");
// calculator(2, 3, "sub");
// calculator(2, 3, "mul");

/////////////////////////
/* RECURSIVE FUNCTION */
/////////////////////////

/* FUnction yang memanggil dirinya sendiri */

var countdown = (counter) => {
  //counter = 0
  console.log(counter);
  // ounter -1 = -1
  counter--
  //countdown(0)
  if(counter >=0) {
    countdown(counter)
  }
};

countdown(10);
