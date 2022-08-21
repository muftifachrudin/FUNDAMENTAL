///////////////
// MARKET V.2.0
///////////////


class Products{
  constructor(name, price, stock) {
    this.name = name
    this.price = price
    this.stock = stock
  }
}

class FastFood extends Products {
  constructor(name, price, stock, expired){
    super(name, price, stock)
    this.category = 1
    this.expired = expired
  }
}

class Cloth extends Products {
  constructor(name, price, stock, size){
    super(name, price, stock)
    this.category = 2
    this.size = size
  }
}

class Electronic extends Products {
  constructor(name, price, stock, warranty){
    super(name, price, stock)
    this.category = 3
    this.warranty = warranty
  }
}

class fruits extends Products {
  constructor(name, price, stock, sugar){
    super(name, price, stock)
    this.category = 4
    this.sugar = sugar
  }
}

// [name, price, stock]
const products = [
  {category: 1, name : 'Noodle', price: 20000, stock: 8, expired: 2020},
  {category: 2, name : 'Hoodie', price: 15000, stock: 7, size: 'L'},
  {category: 3, name : 'Headphone', price: 20000, stock: 8, warranty: 'Yes'},
  {category: 4, name : 'Apel', price: 10000, stock: 5, sugar: 'High'},
]

//Function untuk menampilkan list buah
const createList = (arr, header, kind=1) => {
  // Variable awal yang akan menyimpan List buah
  let list = `${header}\n\n`

  // arr = products ==> {name, price, stock}
  // arr = carts ==> {name, price, qty}

  // kind : 1 - memproses array products
  // kind : 0 - memproses array carts

  if(kind){
    arr.forEach((val, i) => {
      // Setiap buahnya akan dibuatkan satu list dengan for each tertentu dan ditambahkan ke variable fruitlist
      // val : {category: 1, name : 'Noodle', price: 20000, stock: 8, expired : 2020}
      const {name, price, stock, category, expired, size, sugar, warranty} = val
      let newlist = `${i}. NAME : ${name} || STOCK : ${stock}|| PRICE : Rp.${price}`
      
      switch (category) {
        //Fast Food (expired)
        case 1:
          newlist += ` || EXP : ${expired}\n`
          break

        //Cloth (size)
        case 2:
          newlist += ` || SIZE : ${size}\n`
          break

        //Electronic (warranty)
        case 3:
          newlist += ` || WARRANTY : ${warranty}\n`
          break

        //Fruit (sugar)
        case 4:
          newlist += ` || SUGAR : ${sugar}\n`
          break
      }
      //return list
      list += newlist

    });
  } else {
    arr.forEach((val, i) => {
      const {name, price, qty} = val
      list += `${i}. ${name} || Rp.${price} || qty : ${qty}\n`
    })
  }
  // Return list
  return list
}

// [name, price, qty, totalPrice]
var cart = [];

// menggunakan while () untuk looping
while (true) {
  const menu = parseInt(
    prompt(`
        Apa yang ingin Anda lakukan :
        1. Menampilkan produk
        2. Menambahkan produk
        3. Menghapus produk
        4. Membeli produk
        5. Exit
    `)
  );
  //Menampilkan Daftar Product
  if (menu == 1) {

    // Menampilkan daftar product
    alert(createList(products, "Daftar Produk"));
    
  //Menambah Daftar Product 
  } else if (menu == 2) {

    const catOpt = parseInt(
      prompt(
        'Kategori produk yang ingin ditambahkan\n\n' +
        '1. Cepat Saji \n' +
        '2. Pakaian\n' +
        '3. Elektronik\n' +
        '4. Buah\n\n'
      )
    )
    // Input Nama, Harga, Stock untuk buah yang baru
    const name = prompt("Masukan nama produk :");
    const price = parseInt(prompt("Masukan jumlah harga satuan :"));
    const stock = parseInt(prompt("Masukan jumlah stock :"));
    
    let newProduct
    switch (catOpt) {
      //Fast Food (expired)
      case 1:

        const expired = prompt('Masukkan waktu expired')
        newProduct = new FastFood(name, price, stock, expired)
        break;
      //Cloth (size)
      case 2:

        const size = prompt('Masukkan size produk :')
        newProduct = new Cloth(name, price, stock, size)
        break;
      //Electronic (waranty)
      case 3:

        const warranty = prompt('Masukkan status garansi :')
        newProduct = new Electronic(name, price, stock, warranty)
        break;
      //Fruits (sugar)
      default:

        const sugar = prompt('Masukkan tingkat kadar gula')
        newProduct = new fruits(name, price, stock, sugar)
        break;
    }
   
    // Array yang sudah jadi, di push ke array fruits
    products.push(newProduct);

    // Menampilkan daftar buah
    alert(createList(products, "Daftar Buah"));

  //Menghapus daftar product
  } else if (menu == 3) {
    // Menampilkan list buah setelah selesai menambahkan satu buah baru
    // Index dari buah terpilih akan disimpan ke variable selIndex
    const selIndex = parseInt(prompt(createList(products, "Menghapus Produk")));

    // Menghapus daftar buah dan memilih buah untuk dihapus
    // index dari buah terpilih akan disimpan ke variable selIndex
    products.splice(selIndex, 1);

    // Menampilkan daftar buah
    alert(createList(products, "Daftar Product"));

  //Membeli product
  } else if (menu == 4) {
    const carts = []

    // While 'memilih buah', akan berulang untuk memilih buah yang ingin dibelanjakan
    while (true) {

      // menampilkan daftar buah dan memilih buah untuk dibeli
      const selIndex = parseInt(prompt(createList(products, "Daftar Produk")));

      // menyimpan nama, harga dan stock buah yang terpilih ke dalam variabel tersendiri
      // fruits[1]
      const {name, price, stock} = products[selIndex]

      // LOOP untuk meminta/input quantity dari buah yang terpilih
      while (true) {
        // Jumlah stock yang ingin dibeli
        const qty = parseInt(
          prompt(
            `Masukan Quantity untuk ${name}, Stock : ${stock}`
          )
        );

        if (qty > stock) {
          alert(
            `Quantity yang diminta ${qty}, melebihi jumlah Stock ${stock}`
          );
        } else {
          // masukkan ke keranjang (cart)
          carts.push({name, price, qty});

          // kurangi stock buah yang dipesan
          // 7-2
          products[selIndex].stock -= qty;
          //keluar dari loop
          break;
        }
      }

      // tampilkan isi keranjang
      const cartList = createList(carts, "Keranjang", 0)

      const again = prompt(
        `${cartList}\n\nIngin belanja lagi ? (ya / tidak)`
      );

      //kluar dari loop 'Choosing fruits'
      //tidak, TIDAK, tidak
      if (again.toLowerCase() == "tidak") {
        break;
      }
    }

    //hitung belanjaan
    let finalPrice = 0;
    //cart = [name, price, qty, total]
    carts.forEach((cart) => {
      
      cart.total = cart.qty * cart.price;

      finalPrice += cart.total;
    })

    let finalReport = "";

    carts.forEach((cart) => {
      const {name, price, qty, total} = cart
      finalReport += `${name} : ${price} * ${qty} = ${total}\n`;
    })

    //while bill
    while (true) {
      //menampilkan informasi belanja termasuk total uang yang harus dibayar
      const money = parseInt(
        prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
      );

      const margin = Math.abs(money - finalPrice);

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
