/////////
// ARRAY
/////////


// Buatlah program untuk menentukan bilangan terbesar serta bilangan terkecil
// dari banyak bilangan yang diinputkan oleh user
// ketentuan : tidak boleh memakai method SORT bawaan javascript


let input, arrInput = []
let min = 0, max = 0

do{
    let input = parseInt(prompt('Silahkan Masukan Bilangan yang kamu Inginkan')) //2,3,1 stop

    if (input < min || min === 0){ // 2<0? true, min=2 ==> 3<2? false ===> 1<2? true, min=1
        min = input
    }
    if(input > max){ // 2>0? true, max=2 ===> 3>2
        max = input

    }
    if(isNaN(input)) break;
    arrInput.push(input)
}while(true)

alert(`Hasil Baris Angka dari ${arrInput} Memiliki Bilangan Min : ${min} & Max : ${max}`)







