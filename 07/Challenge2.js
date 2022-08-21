// Concate Middle (No method)
// Buatlah function untuk mendapatkan huruf/angka/karakter yg berada di tengah
// suatu deret kata

// Ex.  Input   : 'Ryan'
//      Result  : ya

//      Input   : Hello, I'm Ryan!
//      Result  : ll'a

function concateMiddle(word) {
  var output = "";
  var temp = ""; // World!

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      // Hitung total karakter yang ada di dalam variable temp
      // Dengan 2 kemungkinan, total karakternya genap/ganjil
      if (temp.length % 2 === 0) {
        // Kemungkinan Genap
        let midIndex = temp.length / 2;
        console.log(midIndex);
        output += temp[midIndex - 1];
        output += temp[midIndex];
      } else {
        // Kemungkinan Ganjil
        let midIndex = Math.floor(temp.length / 2);
        output += temp[midIndex];
      }

      temp = "";
    } else if (i === word.length - 1) {
      temp += word[i];
      if (temp.length % 2 === 0) {
        // Kemungkinan Genap
        let midIndex = temp.length / 2;
        console.log(midIndex);
        output += temp[midIndex - 1];
        output += temp[midIndex];
      } else {
        // Kemungkinan Ganjil
        let midIndex = Math.floor(temp.length / 2);
        output += temp[midIndex];
      }
    } else {
      temp += word[i];
    }
  }

  console.log(output);
}

concateMiddle("Hello World!");
