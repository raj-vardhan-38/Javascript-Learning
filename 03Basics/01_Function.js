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
