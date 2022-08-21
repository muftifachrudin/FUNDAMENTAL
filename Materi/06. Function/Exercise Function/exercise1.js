/////////////////////
/* SORT DESCENDING */
/////////////////////

/*
    1. return < 0, a akan berada sebelum b
    2. return 0, posisi a dan b tidak akan berubah
    3. return > 0, b akan berada sebeluma

*/
var things = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"]

var asc = (a, b) => {
    return a - b 
}
var dsc = (a, b) => {
    return b - a 
}

things.sort(asc);
console.log(things);

const words = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"]

words.sort((a, b) => {
    if (a > b) {
        return -1
    } else if(a < b) {
        return 1
    }
})

console.log(words);
