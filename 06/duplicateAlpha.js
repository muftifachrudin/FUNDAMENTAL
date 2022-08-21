// !Duplicate Alpha
// Buatlah function untuk mencari huruf yang tidak terduplikasi
// ex input : "Hello world!"
//    Result : "Huruf H masih original belum terduplikasi"

function notDuplicateAlpha(word) {
        let strWord = word.toLowerCase(word)
        let alpha = ''

        for(let i = 0; i < strWord.length; i++) {
            let temp = 0;
            for(let j = 0; j < strWord.length; j++){
                if (strWord[i] === strWord[j]){
                    temp++;
                }
            }

            if (temp === 1) {
                alpha += strWord[i];
            }         
        }
        console.log(`Huruf ${alpha} masih original belum terduplikasi`);
}

notDuplicateAlpha('Mufti Ari Fachrudin')
