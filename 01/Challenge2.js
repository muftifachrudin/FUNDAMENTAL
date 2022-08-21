// Program untuk memangkatkan bulangan sesuai dengan jumlah digitnya
// input = 3
// result = 3^1
// Step :
// 1. Ambil Inputan
var input = 11
// 2. Cari jumlah digit angka inputan
var jumlahdigit = input.toString().length
// 3. Pangkatkan angka inputan dengan jumlah digit angka inputan
var result = Math.pow(input, jumlahdigit)
console.log(result);