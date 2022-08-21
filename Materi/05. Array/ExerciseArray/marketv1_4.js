///////////////
// MARKET V.1.4
///////////////

/*
    1. Hanya boleh ada satu block while untuk input qty semua produk
    2. Gunakan for loop untuk menghitung total harga setiap barang dan total harga keseluruhan
    3. App akan memiliki 5 menu utama :
        1.1 Menampilkan buah
        1.2 Menambahkan buah
        1.3 Menghapus buah
        1.4 Membeli buah
        1.5 Exit
    4. Tampilkan daftar buah setiap selesai proses menambah dan menghapus
    5. User kini dapat memilih buah apa yang hendak dibeli, tidak lagi diharuskan
        membeli semua buah
    6. Setiap user sudah menentukan qty dari suatu produk, masukkan produk tersebut ke keranjang
    7. Tampilkan isi keranjang setiap selesai memilih satu produk untuk dibeli, dibarengi pertanyaan
        apakah akan lanjut belanja atau tidak
    8. Kosongkan array setelah selesai melakukan pembayaran
    9. Gunakan loop (disarankan menggunakan for loop) untuk menghitung total biaya
        setiap buah yang dibeli dan total biaya keseluruhan

    Semua bisa dilakukan denga array 2 dimensi

*/

var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

var cart = [];

// menggunakan while () untuk looping
while (true) {
  var menu = parseInt(
    prompt(`
        Apa yang ingin Anda lakukan :
        1. Menampilkan buah
        2. Menambahkan buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
    `)
  );

  if (menu == 1) {
    // Menampilkan list buah setelah selesai menambahkan satu buah baru
    var fruitList = `Daftar Buah\n\n`;
    // 0. Apple // Rp.10000 // 5
    // 1. Grape // Rp.15000 // 7
    // 2. Orange // Rp.20000 // 8

    // i : 0
    // 0. Apple || Rp.10000 || 5 \n
    // 1. Grape || Rp.15000 || 7 \n
    // 2. Orange || Rp.20000 || 9 \n
    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }
    alert(fruitList);
  } else if (menu == 2) {
    // Input Nama, Harga, Stock untuk buah yang baru
    var newName = prompt("Masukan nama buah :");
    var newPrice = parseInt(prompt("Masukan jumlah harga buah :"));
    var newStock = parseInt(prompt("Masukan jumlah stock buah :"));

    // Array yang sudah jadi, di push ke array fruits
    fruits.push([newName, newPrice, newStock]);

    // Menampilkan list buah setelah selesai menambahkan satu buah baru
    var fruitList = `Daftar Buah\n\n`;
    // 0. Apple // Rp.10000 // 5
    // 1. Grape // Rp.15000 // 7
    // 2. Orange // Rp.20000 // 8

    // i : 0
    // 0. Apple || Rp.10000 || 5 \n
    // 1. Grape || Rp.15000 || 7 \n
    // 2. Orange || Rp.20000 || 9 \n
    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }
    alert(fruitList);
  } else if (menu == 3) {
    // Menampilkan list buah setelah selesai menambahkan satu buah baru
    var fruitList = `Menghapus Buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }
    // 0. Apple
    // dst

    // Menampilkan daftar buah dan memilih buah untuk dihapus
    // Index dari buah terpilih akan disimpan ke variable selIndex
    var selIndex = parseInt(prompt(fruitList));

    // Menghapus daftar buah dan memilih buah untuk dihapus
    // index dari buah terpilih akan disimpan ke variable selIndex
    fruits.splice(selIndex, 1);

    // Menampilkan daftar setelah menghapus 1 data
    var fruitList = "Daftar Buah\n\n";

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }

    alert(fruitList);
  } else if (menu == 4) {
    while (true) {
      // Menampilkan List Buah
      var fruitList = `Membeli Buah\n\n`;

      for (var i = 0; i < fruits.length; i++) {
        fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
      }

      // index buah yang dipilih untuk dibeli
      var selIndex = parseInt(prompt(fruitList));

      var selName = fruits[selIndex][0];
      var selPrice = fruits[selIndex][1];
      var selStock = fruits[selIndex][2];

      // LOOP untuk meminta quantity
      while (true) {
        // Jumlah stock yang ingin dibeli
        var selQty = parseInt(
          prompt(
            `Masukan Quantity untuk ${fruits[selIndex][0]}, Stock : ${fruits[selIndex][2]}`
          )
        );

        if (selQty > selStock) {
          alert(
            `Quantity yang diminta ${selQty}, melebihi jumlah Stock ${selStock}`
          );
        } else {
          // masukkan ke keranjang (cart)
          cart.push([selName, selPrice, selQty]);

          // kurangi stock buah yang dipesan
          // 7-2
          fruits[selIndex][2] -= selQty;

          break;
        }
      }

      // tampilkan isi keranjang
      var cartList = `Keranjang\n\n`;

      for (var i = 0; i < cart.length; i++) {
        cartList += `${i}. ${cart[i][0]} || Rp.${cart[i][1]} || ${cart[i][2]} \n`;
      }

      var again = prompt(`${cartList}\n\nIngin belanja lagi ? (ya / tidak)`);

      //kluar dari loop 'membeli buah' karena ad keyword break ketika user menjawab tidak
      if (again == "tidak") {
        break;
      }
    }

    //hitung belanjaan
    var finalPrice = 0;
    //looping menghitung total harga per buah beserta total harga
    for (var i = 0; i < cart.length; i++) {
      cart[i][3] = cart[i][1] * cart[i][2];

      finalPrice += cart[i][3];
    }

    var finalReport = "";

    // ex: Grape : 15000 * 2 = 30000
    for (var i = 0; i < cart.length; i++) {
      finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][3]}\n`;
    }

    //while bill
    while (true) {
      //menampilkan informasi belanja termasuk total uang yang harus dibayar
      var money = parseInt(
        prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
      );

      var margin = Math.abs(money - finalPrice);

      if (money < finalPrice) {
        alert(
          `Uang yang Anda masukan masih kurang ${margin}, total belanja ${finalPrice}`
        );
      } else {
        if (money > finalPrice) {
          alert(`Terima Kasih, uang kembalian Anda ${margin}`);
        } else {
          alert(`TerimaKasih`);
        }
        break;
      }

      cart = [];
    }
  } else {
    break;
  }
}
