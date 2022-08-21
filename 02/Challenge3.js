// Buatlah program untuk menghitung total huruf vokal pada suatu kalimat
// ex. Kata...... : ''
//      totalHurufVokal :
// menggunakan looping
// agar dapat melooping suatu value, harus memiliki index penomoran
// string & array itu memiliki index penomoran

let kata = 'purwadhika'
let hurufVokal = 'aiueo'
let totalHurufVokal = 0
for(let i=0; i < kata.length; i++){
    if(hurufVokal.includes(kata[i].toLowerCase())){
        totalHurufVokal++
    }
}
console.log(totalHurufVokal);
