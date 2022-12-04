// console.log("Micheal")


function myFunction1(x,y){
    console.log(x,y);
}

// myFunction1(3,7)




function sayMyName(x){
    console.log('Hello, Welcome back ${x}')
}
sayMyName()

function doMath(x=2,y=3){
    console.log(x*y);
}

// doMath(7,9)



function doMath1(x){
    if (x===undefined){
        console.log("please enter a value");
    }else{
        console.log(x*2);
    }
}
// doMath1(20)

function name1(){
    // console.log(arguments);
    let el = [];
    for (let x = 0; x < arguments.length; x++){
        el.push(arguments[x])
    }
    console.log(el);
}

// name1(3,4,6,7,5);


function name1(){
    console.log(arguments);
    let el = [];
    for (let x = 0; x < arguments.length; x++){
        el.push(arguments[x])
    }
    return el.reduce((a,b) => {
        return a + b;
    });
// }
// console.log(name1(4,5,6,7,5))


function name2(){
    let el = []
    for (let i = 0; i< arguments.length; i++){
        el.push(arguments[i])
    }
    return parseInt(el.reverse().join(""));
}
// console.log(name2(3,2,6,7,5))


// write a function to check height
function height(x){
    if(x > 70){
        console.log("you are Tall")
    } else{
        console.log("You are Short")
    }


// height(71)

function confirm(){
    max = Infinity

    for (let i = 0; i < arguments; i++){
        if(arguments[i] < max){
            max = arguments[i]
        }
    }
    return max
}

// console.log(confirm(1,5,3,9,6,20));


const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
// readLine.question("Hey, What's on your mind", (name) => {
//     console.log(`hmmm, really.....so ${name} is what you have in mind`);
// });



const prompt = require("prompt-sync")();

// let name = prompt ("What is your name:");

// console.log("What a beautiful Name: ",name);

function inputData(){
    let input1 = prompt("Enter your first Number");
    let input2 = prompt("Enter your second Number")

    console.log(input1 + input2);
}

// inputData();

// class Build{
//     constructor(name){
//         this.name = name
//     }

//     log(){
//         console.log(`display ${this.name}`);
//     }
// }

// let build = new Build("Micheal");

// build.log();



class Build{
    constructor(name, color, age){
        this.name = name
        this.color = color
        this.age = age
    }
    log(){
        console.log(`display ${this.name}`)
    }
}
// let build1 = new Build("Peter","Fair",10)
// console.log(build1)



// function david(x){
//     const me = {name:"david", age:10, color:"black",score:96}
// const me1 = {name:"emem", age:11, color:"black",score:90}
// const me2 = {name:"blassing", age:15, color:"fair",score:80}

// let el = [];
// el.push(me,me1,me2,x);
// let sum = 0;
// el.forEach((element) => {
//     sum += element.score;
// });
// return sum
// }


// console.log(david({name:"david", age:10, color:"black",score:100}))

// let newArr = [3,6,8]
// let newArr1 = {name:"micheal", name:"emem", name:"blessing"}
// let newArr2 = {name:"micheal", age:15, color:"black",score:100}

// // for(let i in newArr2){
// //     console.log(newArr2[i]);
// // }


