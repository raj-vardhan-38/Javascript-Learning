// var c = 300
let a = 300;

if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Raj"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()

if(true){
    const username = "Raj"
    if (username === "Raj") {
        const website = " youtube"
        console.log(username + website);
    }
}
// console.log(username);

// +++++++++++++++++++++++ ____________ ++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1 
}


// addTwo(5)
const addTwo = function(num){   // function or expression 
    return num + 2
}

console.log(addTwo(5))