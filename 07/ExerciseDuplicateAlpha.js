// !DuplcateAlpha
// Buatlah function untuk mencari huruf yang tidak ter-duplikasi
// Ex.  Input   : 'Purwadhika'
//      Result  : 'Huruf P, u, r, w, d, h masih original dan belum ter-duplikasi'

function notDuplicateAlpha(word) {
  let alpha = "";

  for (let i = 0; i < word.length; i++) {
    // i=0
    let tempCount = 0;
    for (let j = 0; j < word.length; j++) {
      // j=0 ---> j=1 ---> j=2 ---> j=3
      if (word[i] === word[j]) {
        // a===a? tempCount = 1 ---> a===b? false ---> a===c? false ---> a===c? false
        tempCount++;
      }
    }

    if (tempCount === 1) {
      alpha += word[i];
    }
  }
  console.log(alpha);
}

notDuplicateAlpha("abcc");
