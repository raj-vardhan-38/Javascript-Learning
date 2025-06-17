function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //parameters 
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){ 
    // let Result = number1 + number2 ;
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(10, 20) // arguments 
console.log("Result: ", result); 

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Raj"))

function calcculateCartPrice(value1, value2, ...num1){
    return num1
}

console.log(calcculateCartPrice(200, 400, 500, 2000));

const User = {
    username: "Raj",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(User)
handleObject({
    username: "Sam",
    price: 399
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));

console.log(returnSecondValue([200, 400, 100, 600]));
