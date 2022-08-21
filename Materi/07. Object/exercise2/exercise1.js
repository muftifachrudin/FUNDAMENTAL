/////////////////////////////
/* Exercise - Date Object */
/////////////////////////////

const time = new Date()

const year = time.getFullYear()

//0 - 11
const month = time.getMonth()

//1 - 31
const date = time.getDate()

//0 - 6 (sun - sat)
const day = time.getDay()

//0 - 23
const hours = time.getMinutes()

const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
]

console.log(`Saat ini Bulan ${month + 1} : ${months[month]} Tahun ${year}`);