const accountId = 144553
let accountEmail = "rajvardhan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not Allowed

accountEmail = "raj@gmail.com"
accountPassword = "221122"
accountCity = "Kota"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scop and function scope
*/