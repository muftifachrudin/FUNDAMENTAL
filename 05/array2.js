// Buatlah program untuk memisahkan setiap angka ganjil yang saling bersampingan
// ketentuan : tidak boleh memakai method bawaan javascript & 1 array only!
// ex :  input : [3, 9, 2, 3, 4, 7, 5, 6]
//       Output : [3. "-", 9, 2, 3, 4, 7, "-", 5, 6]

let input = [3, 9, 2, 3, 4, 7, 5, 6]

for(let i = 1; i<input.length; i++){ // 1<8 true, 2<8 true

    if((input[i] % 2 !== 0) && (input[i-1] % 2 !== 0)){ //1<4
        input.splice(i, 0, "-")
        i++
    }
} 

console.log(input);