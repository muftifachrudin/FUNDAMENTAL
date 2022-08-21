////////////////
/* PALINDROME */
////////////////


/* Sebuah kalimat yang dibaca sama walaupun dari arah terbalik (dari belakang) dengan mengabaikan karakter selain
    huruf */

/* ini, katak, kakak, race car, taco-cat, madam I'm Adam */

/*
    Mata Hari
    mata hari
    matahari
    irahatam
*/

/* regular Expression (RegEx) */

// let word = "ababcbas! s"


//let word = ""
// console.log(word.replace(/[^a-c]/g, "-"));
// // ^ = kecuali
// // [] = lebih dari 1 index
// // /g = global

/* Clean */
// let wordClean = word.toLowerCase.replace(/[^a-z]/g, "")
// /* Reverse */
// let wordReversed = wordClean.split("").reverse().join("")
// /* Split */
// let wordArr = word.split("")

// let isSame = wordClean == wordReversed



const palindrome = (word) => {
    // diubah kehuruf kecil
    // hapus selain huruf
    const wordClean = word.toLowerCase().replace(/[^a-z]/g, "")
    // ubah menjadi array
    // ubah urutan (reverse)
    // ubah menjadi satu string
    const wordReversed = wordClean.split("").reverse().join("")

    const isSame = wordClean == wordReversed

    return `${word} : ${isSame}`
}
console.log(palindrome("Ka Ta-!_k"));

