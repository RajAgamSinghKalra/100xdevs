//syntax
const readline = require('readline');//importing readline to take in the input

const rl = readline.createInterface({//readline object to write and read via terminal
    input: process.stdin,
    output: process.stdout
  });




let firstname = "raj";
const gender = "male";
var age = 21;
var isstudent = true;
console.log(isstudent);
var isstudent = 0;
console.log(firstname, gender, age, isstudent);
isstudent = 1;
console.log(isstudent);
console.log("firstname");

//use let always!!!
// let =  block scoped   | no redeclaration  | top declaration != global
// var = function scoped | yes redeclaration | top declatration = global
// const = cannot change

let numbs = [1,2,3]; //array bhai

console.log(numbs[1]);//2
console.log(numbs[0]);//1

let sum = 10 + 11;
console.log(sum);
let comparison = (10 === 10);
console.log(comparison);

function greet(name){
    return "hello" + name;
}

let message = greet("raj");
console.log(message);

function sumerr(a, b){
    let total = a +b;
    return total;
}

console.log(sumerr(1, 2));

if (age >= 18){
    console.log("is older than 18");
}else{
    console.log("no vote");
}

let users = ["Raj", "harkeerat", "dijeet"];
for (let i = 0;i<4;i++){//(initiation section; condition section; increment section) stops before 4.//3rd value will be undefined as it only has till 0 to 2.
    console.log(users[i]);
}

//complex types in js : objects. (collection of key value pairs)

let userobject = {
    name:"Raj",
    Age:21, 
    gender: ""
}
rl.question("Please enter your gender: ", function(inputGender) {
    userobject.gender = inputGender; // directly updates gender inside object

    let mr;
    if (userobject.gender === "male") {
        mr = "Mr.";
    } else if (userobject.gender === "female") {
        mr = "Mrs.";
    } else {
        mr = "not a real gender";
    }

    function hello(user) {
        console.log("HI " + mr + user.name + " you are " + user.Age + " years old");
    }

    hello(userobject);
    rl.close();
});

//array of objects :
const users2 = [{
name:"Raj",
Age:21, 
gender: ""
},
{
name:"Raj1",
Age:21, 
gender: ""
}];