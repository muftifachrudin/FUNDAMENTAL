var tahun = 360
var bulan = 30
var minggu = 7

var x = 1250
var jumlaHTahun = Math.floor(x/(tahun))
var sisATahun = x % tahun
var jumlaHBulan = Math.floor(sisATahun/bulan)
var sisABulan = sisATahun % bulan
var jumlahMinggu = Math.floor(sisABulan/minggu)
var sisAMinggu = sisABulan % minggu 

var result = `${jumlaHTahun} Tahun, ${jumlaHBulan} Bulan, ${jumlahMinggu} Minggu, ${sisAMinggu} Hari`
console.log(result);