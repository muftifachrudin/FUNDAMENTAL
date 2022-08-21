//INVERSION
//Buatlah function untuk menentukan ada berapa bilangan yang tidak sesuai dengan urutan
//pada sebuah array

//ex. [1, 3, 2, 4] ==> 1 Inversion = 3
//ex. [4, 1, 2, 3] ==> 3 Inversion = 4 dan 1, 4 dan 2, 4 dan 3
//ex. [3, 1, 2, 4] ==> 2 Inversion = 3 dan 1, 3 dan 2

function inversions(arrNumbers){
    let totalInversions = 0

    for (let i = 0; i < arrNumbers.length; i++){ // i=0, i=1, i=2, i=3
        for(let j = i; j < arrNumbers.length; j++){ // 
            if(arrNumbers[i] > arrNumbers[j]){
                totalInversions++
              
            }
        }
    }
    console.log(totalInversions);
}

inversions([1,3,2,4]);

