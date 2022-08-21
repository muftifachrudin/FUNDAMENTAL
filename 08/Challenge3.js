// Change Upper ( 1 variable only)
// Ex. Input    : helloWorldHai!
//     Result   : hello-world-Hai!

let changeUpper = (word) => {
  word = word.split("");
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < word.length; i++) {
    if (alpha.includes(word[i])) {
      word[i] = word[i];
    } else {
      word = word.join("-");
    }
  }
};

console.log(changeUpper("helloWorldHai!"));
