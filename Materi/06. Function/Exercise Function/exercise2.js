var numbers = [1, 3, 4, 5]

var oddEven = (numbers) => {
    var result = numbers.map((number) => {
        if(number % 2 == 0){
            return [number, "Genap"]
        }else {
            return [number, "Ganjil"]
        }
    })
    return result

}
var oddEvenResult = oddEven(numbers)
console.log(oddEvenResult);