const user = {
    username: "Raj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website `);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Raj"
//     console.log((this.username)); //=> undefined 
// }
// chai()


// const chai = function(){
//     let username = "Raj"
//     console.log((this.username));
// }
// chai()


// +++++++++++++ Arrow Function +++++++++++++
const chai = () => {
    let username = "Raj"
    console.log((this));
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Sam"})
console.log(addTwo(3, 4));

