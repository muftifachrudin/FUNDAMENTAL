// ALpha Forward
// Buatlah function untuk memforward setiap huruf alphabet sesuai dengan keinginan user

// ex.  Kata    : 'abc'
//      Forward : 3
//      Result  : 'def

let alphaForward = (word, forward)=>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = ''
    for(i = 0; i < word.length; i++) { // i=0 -- a ---> i=1 -- b --> i=2 -- c
        let index = alphabet.indexOf(word[i]); // x index ke? 23 -----> y index ke? 24, z indeks ke 25
        if(index+forward > alphabet.length-1){ // 23+5 > 24 true, 24+5 > 24 true, 25+5 > 24 true
            index = (index+forward) - alphabet.length // 28 - 25 = 3, 29 - 25 = 4, 30 - 25 = 5
            result += alphabet[index] // index 3, index 4, index 5
        }else{
            result += alphabet[index + forward]; // (abc)alphabet[0+5] = f -----> alphabet[1+5] = g ----> alphabet[2+5] = h
        }

    }
    console.log(result);
}

alphaForward('mufti', 23)
