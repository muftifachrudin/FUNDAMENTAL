//////////////////
/* THIS KEYWORD */
//////////////////


const person = {
    firstName : "Topias",
    lastName : "Taavitsainen",
    nickName : "Topson",
    greet : function(time) { console.log(`Good ${time}`)},
    intro : function(time) { 
        this.greet(time)
        console.log(`My first name is ${this.firstName}`)
    },
    test : () => { console.log(this) }
}
// person.greet("Evening")
person.test()