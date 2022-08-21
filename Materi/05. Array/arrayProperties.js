// Array Properties

// Push = Menambahkan value pada index terakhir
// Pop = Mengurangi value pada index terakhir

// var things = ["book", "pen", "clock"]

// things.push("jacket")

// things.push("apple", "banana")

// console.table(things)

// things.pop()

// things.pop()

// console.table(things)

// unshift = menambahkan value pada index awal/pertama

// shift = menghapus value pada index awal/pertama 

// var things = ["book", "pen", "clock"]

// things.unshift('jacket')

// things.unshift("apple", "banana")

// things.unshift("pencil", 3, true)

// console.table(things)

// things.shift()

// things.shift()

// console.table(things)



/////////////////
// METHOD SPLICE
/////////////////

// splice : Menghapus dan Menambahkan data

/*

    Syntax

    array.splice(start number, delete count)

    

*/

////////////////////////
// Case : Menghapus data
////////////////////////

// var things = ["book", "pen", "clock", "paper"]

// things.splice(1, 2)

// console.table(things)

// var things = ["book", "pen", "clock", "paper"]

// things.splice(0, 3)

// console.table(things)

// var things = ["book", "pen", "clock", "paper"]

// things.splice(1,1)

// console.table(things)


////////////////////////
// Case : Menambah data
////////////////////////

// var things = ["book", "pen", "clock", "paper"]

// things.splice(1, 0, "pencil")

// things.splice(3, 0, "magazine", 1987)

// console.table(things)


//////////////////////////////////////
// Case : Menambah dan menghapus data
/////////////////////////////////////

// var things = ["book", "pen", "clock", "paper"]

// console.table(things)

// things.splice(1, 2, "door")

// console.table(things)

// things.splice(1, 1, "middle", "double")

// console.table(things)

//////////////////////////////////////////////////////////
// Delete : Menghapus data dan index akan berisi undefined
/////////////////////////////////////////////////////////

// var things = ["book", "pen", "clock", "paper"]

// delete things[0]

// console.log(things);

// delete things[2]

// console.log(things);


////////////////////////////////
// Slice : Copy value dari array
////////////////////////////////

/*

array.slice(start index, end index)

start index : index awal dari data yang akan dicopy

end index : index akhir dari data yang akan dicopy (tidak termasuk)

*/

// var fruits = ["apple", "banana", "cherry", "lemon", "watermelon"]

// console.table(fruits)

// // copy banana dan cherry

// var banCherry = fruits.slice(1, 3)

// console.table(banCherry)

// // copy banana, cherry dan lemon

// // var banCheMon = fruits.slice(1, 4)

// // var banCheMon = fruits.slice(2, 5)

// var banCheMon = fruits.slice(2)

// console.table(banCheMon)



////////////////////////////////////////////////////////////////////
// INCLUDES : Memeriksa apakah suatu array mengandung value tertentu
////////////////////////////////////////////////////////////////////

// var colors = ["black", "grey", "white", "red", "green", "blue"]

// var colRed = colors.includes("red")
// // True
// console.log(colRed);

// var colPurple = colors.includes("purple")
// // False
// console.log(colPurple);

// var colRedCapital = colors.includes("Red")
// // False
// console.log(colRedCapital);

// /////////////////////////////////////////////////////
// // INDEXOF = Mencari index dari suatu data pada array
// /////////////////////////////////////////////////////

// var colors = ["black", "grey", "white", "red", "green", "blue"]

// var indexRed = colors.indexOf("red")

// console.log(indexRed);

// var indexGrey = colors.indexOf("grey")

// console.log(indexGrey);



/////////////////////////////////////////////////////////////////////
// SORT = Mengurutkan data pada array secara ascending (0 - 9 / a - z)
////////////////////////////////////////////////////////////////////


// var animals = ["anoa", "dragon", "cameleon", "bird", "cat"]

// console.table(animals)

// animals.sort()

// console.table(animals)

// var numbers = [32, 11, 41, 2]

// numbers.sort()

// console.table(numbers)


///////////////////////////////////////////////
// REVERSE = Membalikkan urutan data pada array
///////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"]

console.table(days)

days.reverse()

console.table(days)


////////////////////////////////////////////////////////////////
// JOIN = Menggabungkan data pada array dengan karakter tertentu
///////////////////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"]

// var joinDays = days.join(", ")

// console.log(joinDays);


////////////////////////////////////////////////////////////////
// CONCAT : Menggabungkan data dari dua array atau lebih
///////////////////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"]
// var animals = ["anoa", "dragon", "cameleon", "bird"]
// var fruits = ["apple", "banana", "cherry", "lemon"]

// // days + fruits

// var dayFruits = days.concat(fruits)
// console.table(dayFruits)

// // days + animals + fruits

// var allarray = days.concat(animals, fruits)
// console.table(allarray)



///////////////////////////////////
// Array 2 D = Array di dalam array
///////////////////////////////////

// var things =[
    //     ["red pen", "blue pen"],
    //     ["analog clock", "digital clock"],
    //     ["futsal shoes", "badminton shoes"],
    // ]
    // // "blue pen"
    // console.log(things[0][1]);
    // // "badminton shoes"
    // console.log(things[2][1]);
    
    // things.push(["apple", "banana"])
    
    // console.table(things)
    
    // things.unshift(["laptop", "personal computer"])
    
    // console.table(things);
    
    // // remove data terakhir
    // things.pop()
    
    // // remove data pertama
    // things.shift()
    
    var things =[
        ["red pen", "blue pen"],
        ["analog clock", "digital clock"],
        ["futsal shoes", "badminton shoes"],
        
    ];
    
    console.table(things)
    
    things[1] = ["blue car", "red car"]
    
    console.table(things)
    
    things [1][0] = "black car"
    
    console.table(things)
    
    
    /////////////////////////////////////////////////////////////////////////////
    // LOOP WITH ARRAY : Melakukan looping untuk memproses setiap data pada array
    /////////////////////////////////////////////////////////////////////////////
    
    // var categories = ["Horror", "Sci-Fi", "Thriller", "Adventure", "Animation", "Comedy"]
    
    // var listCat = `Terdapat ${categories.length} kategori film :\n`
    // // i : 0 1 2 3 4
    // for(var i = 0 ; i < categories.length ; i++){
        
        //     listCat += categories[i] + '\n'
        // }
        
        // console.log(listCat);
    
        
        
        
        
        /*
            Method yang mengubah nilai asli :
            1. Push = menambah data index akhir
            2. pop = mengurangi data index akhir
            3. shift = menambah data index awal
            4. unshift = mengurangi data index akhir
            6. splice = menghapus dan menambahkan data
            
            Method yang tidak mengubah nilai asli (hasil operasinya disimpan ke variabel baru) :
            1. slice
            2. includes
            3. indexof
            4. sort
            5. join
            6. concat
            
              
        */
        
        
        
        