// Buatlah program untuk men-generate bilangan acak dari 1-100
// dan bulatkan bilangan tersebut sesuai dengan aturan matematika
// serta tambahkan keterangan apakah bilangan tersebut dibulatkan ke-atas atau ke-bawah

let angkaRandom = Math.random() * 100 + 1;
let angkaBulat = Math.round(angkaRandom)

let pembulatan
if (angkaRandom > angkaBulat){
    pembulatan = "Ke Bawah"
    
}else {
    pembulatan = "Ke Atas"
}

let result =`Angka Random ${angkaRandom}\nAngka Bulat ${angkaBulat}\nMerupakan Pembulatan ${pembulatan}`

console.log(result);
