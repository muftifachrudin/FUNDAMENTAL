// // var jumlahUmur = a + b
// // var rasioUmur = a / b

// // var resultJumlah = 49
// var resultRasio = 0.4

// // a/b = 4/10
// // a= 4/10 * b
// // a+b = 49
// // 4/10 * b + 10/10 * b = 49
// // 14/10*b=49
// // b=490/14

// var usiaBudi = 490 / 14
// var duaTahunbudi = 2 + (usiaBudi)

// // a+b = 49
// // a=49 - (490/14)
// var usiaAndi = 49 - (usiaBudi)
// var duaTahunAndi = 2 + (usiaAndi)

// var fixUsia = usiaAndi + usiaBudi

// var stringUsia = `Usia Andi ${duaTahunAndi}, usia Budi ${duaTahunbudi}`

// console.log(stringUsia);

var totalUsia = 49, rasioAndi = 2, rasioBudi = 5, totalRasio = 7

var andi = totalUsia * (rasioAndi / totalRasio)
var budi = totalUsia * (rasioBudi / totalRasio)

console.log(`Umur Andi Saat ini ${andi}`);
console.log(`Umur Budi Saat ini ${budi}`);

andi += 2
budi += 2

console.log(`Umur Andi 2 Tahun Setelahnya ${andi}`);
console.log(`Umur Budi 2 Tahun Setelahnya ${budi}`);