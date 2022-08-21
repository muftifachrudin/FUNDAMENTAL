// IMT (Indeks Massa Tubuh)


// 1. Input massa tubuh disimpan dalam bentuk integer
var weight = parseInt(prompt("Masukkan Massa(Kg) :"))

// 2. Input tinggi badan disimpan dalam bentuk integer
var heightCm = parseInt(prompt("Masukkan Tinggi(Cm) :"))

var heightM = heightCm / 100

// 3. Dengan rumus yang sudah ada, melakukan evaluasi apakah massa yang dimiliki tergolong kurang, 
// ideal, berlebih, berlatih atau sangat berlenih

var status
// massa / (tinggi (m) pangkat 2)
// IMT = massa(kg) / tinggi(meter)^2
var index = weight / Math.pow(heightM, 2)
// a. IMT < 18.5 artinya berat badan kurang
// b. 18.5 - 24.9 artinya berat badan ideal
// c. 30.0 - 39.9 artinya BB sangat berlebih
// d. IMT > 39.9 artinya obesitas
if(index < 18.5){
    status : 'Kurang'
} else if(index >= 24.9)


// tampilkan Massa ... kg & tinggi .... m
// IMT - ........... , BERAT BADAN ANDA IDEAL !

var massaKilogram = 60
var tinggiMeter = 1.8
var imt = Math.sqrt(massaKilogram / tinggiMeter)

console.log(imt);
