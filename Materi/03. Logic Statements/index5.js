// Falsy dan Truthy Values

// Falsy Values : Sebuah nilai yang jika diubah menjadi Boolean akan menjado false
// 0 , "", null, undefined, NaN
// 
// Truthly Value : Sebuah nilai yang jika diubah menjadi Boolean akan menjadi true
// selain dari falsy Value : 23, -23, "hello", [], {}
// var value = 23
// var result = Boolean(value)
// console.log(`${value} adalah : ${result}`)

var value = 0

if(value){
    console.log(`${value} adalah : Truthy Value`);
} else {
    console.log(`${value} adalah : Falsy Value`);
}