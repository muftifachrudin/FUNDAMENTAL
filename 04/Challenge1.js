// Uppercase Wave
// Ex.  Input : ryan
//      Output: Ryan
//              rYan
//              ryAn
//              ryaN


// Cara #1
let input = 'ryan'
let output = ''

for(let i=0; i<input.length; i++){
    let newArr = input.split('') // ['r', 'y', 'a', 'n']
    newArr[i] = newArr[i].toUpperCase()
    newArr = newArr.join('') 
    output += newArr
    output += '\n'
}
console.log(output)







// Cara #2
let input2 = 'ryan'
let output2 = ''

for(let i=0; i<input2.length; i++){
    var tempOutput = ''
    for(let j=0; j<input2.length; j++){
        if(j === i){
            tempOutput += input2[j].toUpperCase() 
        }else{
            tempOutput += input2[j]
        }
    }
    output2 += tempOutput + '\n'
}

console.log(output2)