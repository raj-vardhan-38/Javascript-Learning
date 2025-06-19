const coding = ['JavaScript ', 'C++', 'ruby', 'python']
   
coding.forEach( function (val){  //callback function
   console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);            
} )

function printMe(items){
    console.log(items);   
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

const mycoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

mycoding.forEach((items) => {
    console.log(items.languageName);
    
})
