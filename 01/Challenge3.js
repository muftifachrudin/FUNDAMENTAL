// Buatlah program untuk mengkonversikan jumlah satuan detik menjadi satuan jam, menit & second
// ex input : 3600
//      result : jam, Menit, Detik
// Step :
// 0. terima input nilai jam ---> 4000
var input = 4000
// 1. Cari satuan jam --> 4000 / 3600 
var jam = Math.floor(input/3600)
// 1.1 Cari sisa bagi ----? 4000 % 3600
var sisaDetik = input % 3600
// 2. cari satuan menit ----> sisa bagi / 60
var menit = Math.floor(sisaDetik/60)
// 2.2. cari sisa bagi menit --->
var sisaMenit = menit % 60
// 3. cari satuan detik sisa detik 2.2
var sisaDetik = sisaDetik % 60
// 3.3 cari satuan detik diambul dari  sisa detik
var detik = sisaDetik

var result = `${jam} Jam, ${menit} Menit, ${detik} Detik`
console.log(result);



