//Palindrome
// Ex. Malam => malaM ->
//     Katak = kataK

let word = 'Malam'
let reverseWord = ''

for(i=word.length-1 ; i >= 0 ; i--){ // 4 > 0 = True
   reverseWord += word[i] // += m -> += a dst
}

if(word.toLowerCase() === reverseWord.toLowerCase()){
   console.log(true);
}else{
   console.log(false);
}

console.log(reverseWord);

