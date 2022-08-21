////////////
/* OBJECT */
////////////


/* Key Value pair */
/* Value : Function, key : method */
/* Value : selain function, key : property */

/* Literal */
const captain = {
    name : "kuroky",
    pets : ["cat", "fox", "bird"],
    active : true,
    height : 170,
    play : function(game) { console.log(`playing : ${game}`);}
}

// //////////////////////
// /* Access with dot. */
// //////////////////////

console.log(captain.name);
console.log(captain.pets);
captain.play("Dota")


// ////////////////////////////
// /* Access with bracket [] */
// ////////////////////////////

// console.log(captain["name"]);
// console.log(captain["pets"]);
// captain["play"]("Dota");


////////////////////
/* Changing value */
////////////////////

// captain.pets = "dog"
// captain.height = 169
// captain.play = function(game) { console.log(`Lets Play some ${game}`)};

// // captain.play("Dota")
// // console.log(captain);

// /////////////////
// /* Add new Key */
// /////////////////

// captain.nationality = "Germany"
// captain.greet = function(time) { console.log(`Good ${time}`)}

// console.log(captain);
// console.log(captain.nationality);
// captain.greet("Morning")

// /////////////////
// /* Destructure */
// /////////////////

// const {name, pets, address} = captain
// console.log(name);
// console.log(pets);
// console.log(address);
// console.log((`My name is ${captain.name}, and i have ${captain.pets.length} pets`));



/////////
/* New */
/////////

const capitan = new Object()

console.log(capitan);

capitan.name = "Sebastian"
capitan.pets = ["Owl", "dog"]
capitan.play = function(game) {console.log(`Playing ${game}`)}

console.log(capitan);






