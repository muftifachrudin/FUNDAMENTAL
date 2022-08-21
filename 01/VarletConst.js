// var x let x const
// 1. Scope --> Global Scope & Local Scope --> var tidak mengenal scope
//                                         --> let & const mengenal scope

{
    // Local Scope

}

const angka1 = 1
{
    {
        console.log(angka1);
    }
}

// 2. Value --> var & let valuenya bisa diubah
//          --> const valuenya dapat diubah

const arr1 = ['Kemas', 'Dean', 'Imam']
arr1.push('Glen')
// console.log(arr1);

// 3. Declare --> var bisa membuat variabel dengan nama yang sama
//            --> Let & const tidak bisa

var nama = 'Kemas'
var nama = 'Dean'

// const namaStudent = 'Marcel'
// const namaStudent = 'Imam'

// var namaGame ='PES 2022'
// var namaGame ='FIFA 2022'


