// if

if (2==="2") {
    console.log("executed");
} else {
    // console.log("Not executed");
}
 
// <, >, <=, >=, ==(equal to), !=, === (also check the typeof)

// const score  = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);   
// }

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInByEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy items");
}

if (loggedInFromGoogle || loggedInByEmail) {
    console.log("User logged in");
}

