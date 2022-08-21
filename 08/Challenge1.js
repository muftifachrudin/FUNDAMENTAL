// Sort the numbers (No method & 1 array only)
// Buatlah function untuk mengurutkan bilangan yang acak

// ex. input    : [10, 3, 5, 100, 1]
//     Result   : [1, 3, 5, 10, 100]

function sortTheNumbers(numb) {
  for (let i = 0; i < numb.length; i++) {
    let tmp;
    for (let j = 0; j < numb.length; j++) {
      if (numb[i] < numb[j]) {
        tmp = numb[i];
        numb[i] = numb[j];
        numb[j] = tmp;
      }
    }
    console.log(numb);
  }
}

sortTheNumbers([10, 3, 5, 100, 1]);
