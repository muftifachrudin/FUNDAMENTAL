let input = prompt("Masukan Angka")
input = parseInt(input)
if(input % 2 == 0){
    bilangan = "GENAP";
} else{
    bilangan = "GANJIL"
}

alert(`Angka ${input} tergolong bilangan ${bilangan}`)

