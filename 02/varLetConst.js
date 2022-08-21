// var x let x const
// 1. Scope     -> Global Scope & Local Scope   -> Var tidak mengenal scope
//                                              -> Let & Const mengenal scope
{
    // Local Scope
}

var angka1 = 1 
{
    console.log(angka1)
}

{
    var angka2 = 2
}
console.log(angka2)


{
    let angka3 = 3
    {
        let angka4 = 4
        {
            console.log(angka3)
        }
    }
}

// 2. Value     -> Var & let valuenya bisa diubah
//              -> Const valuenya tidak dapat diubah
// const angka = 10
// angka = 20

const arr1 = ['Kemas', 'Dean', 'Imam']
arr1.push('Glen')
// console.log(arr1)

// 3. Declare   -> Var bisa membuat variable dengan nama yg sama
//              -> Let & const tidak bisa

var nama = 'Kemas'
var nama = 'Dean'

// let namaStudent = 'Marcel'
// let namaStudent = 'Imam'

// const namaTempat = 'Mall'
// const namaTempat = 'Taman'

let namaGame = 'PES 2022'
// ...
// ...
// ...
// ...
// ...
let namaGame1 = 'Fifa 2022'
// console.log(namaGame)
