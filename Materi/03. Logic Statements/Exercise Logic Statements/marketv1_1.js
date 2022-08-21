///////////////
// MARKET V.1.1
///////////////

/*
    1. Stock untuk setiap produk
    2. Ketika user akan input qty melebihi stock, nilai stock ini yang akan disimpan sebagai qty
    3. Saat menampilkan informasi total yang harus dibayar, kita akan meminta user untuk input sejumlah uang
        3.1 jika uang yang diinput kurang dari seharusnya : transaksi dibatalkan, uang yang anda masukan kurang.....
        3.2 jika uang yang diinput sama jumlahnya dengan yang seharusnya : Terima Kasih !
        3.3 jika uangh yang diinput melebihi dari jumlah yang seharusnya : Terima Kasih, Uang kembali untuk Anda.........

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
var qtyApple = parseInt(prompt('Masukan jumlah Apple'))
// jika qty Apple yang diminta melebihi stock Apple
if (qtyApple > stockApple){
    // Menampilkan informasi bahwa qty melebihi stock
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockApple}`)
    // Menyimpan stock Apple sebagai qty yang dipesan
    qtyApple = stockApple
}
// Meminta user input qty untuk setiap buahnya
var qtyGrape = parseInt(prompt('Masukan jumlah Grape'))
// jika qty Grape yang diminta melebihi stock Grape
if (qtyGrape > stockGrape){
    // Menampilkan informasi bahwa qty melebihi stock
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockGrape}`)
    // Menyimpan stock Grape sebagai qty yang dipesan
    qtyGrape = stockGrape
}
// Meminta user input qty untuk setiap buahnya
var qtyOrange = parseInt(prompt('Masukan jumlah Orange'))
// jika qty Orange yang diminta melebihi stock Orange
if (qtyOrange > stockOrange){
    // Menampilkan informasi bahwa qty melebihi stock
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockOrange}`)
    // Menyimpan stock Orange sebagai qty yang dipesan
    qtyOrange = stockOrange
}



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


