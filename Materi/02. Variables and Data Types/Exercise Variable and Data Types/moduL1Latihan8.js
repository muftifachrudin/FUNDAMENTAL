var apel, anggur, jeruk

var hargaApel = 10000
var hargaAnggur = 15000
var hargaJeruk = 20000

var apel = prompt('Masukan jumlah Apel')
var anggur = prompt('Masukan jumlah Anggur')
var jeruk = prompt('Masukan jumlah Jeruk')

var totalHargaApel = apel * hargaApel
var totalHargaAnggur = anggur * hargaAnggur
var totalHargaJeruk = jeruk * hargaJeruk

var totalKeseluruhan = totalHargaApel + totalHargaAnggur + totalHargaJeruk

alert(`
    Detail Belanja
    Apel : ${apel} x ${hargaApel} = ${totalHargaApel}
    Apel : ${anggur} x ${hargaAnggur} = ${totalHargaAnggur}
    Apel : ${jeruk} x ${hargaJeruk} = ${totalHargaJeruk}

    Total : ${totalKeseluruhan}
`)

// var stringResult = `Detail Belanja\nApel : ${apel} x${hargaApel} =${totalHargaApel}\nAnggur : ${anggur} x${hargaAnggur} =${totalHargaAnggur}\nJeruk : ${jeruk} x${hargaJeruk} =${totalHargaJeruk}\n\nTotal ${totalKeseluruhan}`

