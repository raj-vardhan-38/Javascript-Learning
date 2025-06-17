// const tinderUser = new Object()  // singleton obj
const tinderUser = {}  // non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "rajvardhan@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Raj",
            LastName: "Vardhan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)  // (target = {}, source)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "rajvardhan@gmail.com"
    },
    {
        id: 1,
        email: "rajvardhan@gmail.com"
    },
    {
        id: 1,
        email: "rajvardhan@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //output in array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // key:values in array

console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);

// ###################### API ###################
// JSON

// {
//     "name": "Raj",
//     "coursename": "ja in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

