///////////////
// MARKET V.1.3
///////////////

/*
    1. Tampilkan informasi stock saat user menginput quantity
    2. User akan diminta input ulang saat quantity yang diinput melebihi stock
    3. User akan diminta input ulang saat uang diinput kurang dari seharus nya

*/


// tentukan harga satuan untuk setiap buah
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// stock setiap buah
var stockApple = 5
var stockGrape = 7
var stockOrange = 8


// Meminta user input qty untuk setiap buahnya
var qtyApple;
do{
    qtyApple = parseInt(prompt('Masukan jumlah Apple'));
    // jika qty Apple yang diminta melebihi stock Apple
    if (qtyApple > stockApple){
        // Menampilkan informasi bahwa qty melebihi stock
        alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockApple}`)
    }else{
        break
    }
}while(true)


// Meminta user input qty untuk setiap buahnya
var qtyGrape;
do{
    qtyGrape = parseInt(prompt('Masukan jumlah Grape'))
    // jika qty Grape yang diminta melebihi stock Grape
    if (qtyGrape > stockGrape){
    // Menampilkan informasi bahwa qty melebihi stock
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockGrape}`)
}else{
    break
}
}while(true)


// Meminta user input qty untuk setiap buahnya
var qtyOrange; 
do{
    qtyOrange = parseInt(prompt('Masukan jumlah Orange'))
    // jika qty Orange yang diminta melebihi stock Orange
    if (qtyOrange > stockOrange){
    // Menampilkan informasi bahwa qty melebihi stock
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockOrange}`)
}else{
    break
}
}while(true)


// Hitung harga total masing-masing buah
var totalApple = qtyApple * priceApple
var totalGrape = qtyGrape * priceGrape
var totalOrange = qtyOrange * priceOrange

// total keseluruhan
var finalPrice = totalApple + totalGrape + totalOrange

// Munculkan informasi menggunakan alert
var money = parseInt(
    prompt(`
        Detail Belanja
        Apple : ${qtyApple} x ${priceApple} = ${totalApple}
        Grape : ${qtyGrape} x ${priceGrape} = ${totalGrape}
        Orange : ${qtyOrange} x ${priceOrange} = ${totalOrange}

        Total : ${finalPrice}
    `)
)

var margin = Math.abs(money - finalPrice)

if(money < finalPrice) {
    alert(`Transaksi dibatalkan, Uang yang anda masukkan kurang ${margin}`);

} else if(money > finalPrice){
    alert(`Uang Kembalian anda ${margin}`);

} else{
    alert(`Terima Kasih`);
}

// alert(`Final Price : ${finalPrice} \nMoney : ${money} \nMargin : ${margin}`)


