// ***** DATA *****
let numbers = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// ***** SHOW DATA *****
function showData() {
  let print = "";

  // 1. Looping untuk mencetak angka + button samping
  for (let i = 0; i < numbers.length; i++) {
    print += "<tr>";
    for (let j = 0; j < numbers.length; j++) {
      print += `<td> ${numbers[i][j]} </td>`;
    }
    print += `<td><input type="button" value="Sort" id="sortDataSamping${i}" onClick="sortDataSampingDesc(${i})"></td>`;
    print += "</tr>";
  }

  // 2. Cetak button yang ada di bawah
  print += "<tr>";
  for (let i = 0; i < numbers.length; i++) {
    print += `<td><input type="button" value="Sort" id="sortDataBawah${i}" onClick="sortDataBawahDesc(${i})"></td>`;
  }
  print += "</tr>";

  document.getElementById("table").innerHTML = print;
}

showData();

// ***** SORT DATA SAMPING *****
//Menampilkan data awal ascending
function sortDataSampingAsc(index) {
  let sortData = numbers[index];
  sortData = sortData.sort(function (a, b) {
    return a - b;
  });
  numbers[index] = sortData;

  showData();
}
function sortDataSampingDesc(index) {
  let sortData = numbers[index]; // [1, 2, 3, 4]
  sortData = sortData.sort(function (a, b) {
    return b - a;
  }); // [4, 3, 2, 1]
  numbers[index] = sortData;
  // [ [4, 3, 2, 1], [..., ..., ...], ... ]

  showData();

  //jika diklik button maka mendapatkan nilai descending
  let button = document.getElementById(`sortDataSamping${index}`);
  button.onclick = function () {
    // Anonymous function untuk menahan function didalamnya agar tidak langsung dijalankan
    // setelah dklik data kembali ke ascending
    sortDataSampingAsc(index);
  };
}

// ***** SORT DATA BAWAH *****
//Menampilkan data awal ascending
function sortDataBawahAsc(index) {
  let sortData = []; // [1, 5, 9, 13]
  for (let i = 0; i < numbers.length; i++) {
    sortData.push(numbers[i][index]);
  }
  sortData = sortData.sort(function (a, b) {
    return a - b;
  }); // [13, 9, 5, 1]

  for (let i = 0; i < numbers.length; i++) {
    numbers[i][index] = sortData[i];
  }

  showData();
}
function sortDataBawahDesc(index) {
  let sortData = []; // [1, 5, 9, 13]
  for (let i = 0; i < numbers.length; i++) {
    sortData.push(numbers[i][index]);
  }
  sortData = sortData.sort(function (a, b) {
    return b - a;
  }); // [13, 9, 5, 1]

  for (let i = 0; i < numbers.length; i++) {
    numbers[i][index] = sortData[i];
  }

  showData();

  //jika diklik button maka mendapatkan nilai descending
  let button = document.getElementById(`sortDataBawah${index}`);
  // Step: Untuk merubah event listener onclik yang ada di dalam button. Yang awalnya onClick untuk descending, kita ubah menjadi ascending

  button.onclick = function () {
    // Anonymous function untuk menahan function didalamnya agar tidak langsung dijalankan
    // setelah dklik data kembali ke ascending
    sortDataBawahAsc(index);
  };
}
