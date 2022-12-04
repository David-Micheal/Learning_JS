// let x = 2;
// console.log(x*x)

function square(x){
    return x*x
}

square(3)
console.log(square(3))

function square(){
    return 2*2
}
square()
console.log(square())

function square(x){
    return x*x
}
  

console.log(square(2))

function square(x,y){
    return x*y
}
console.log(square(7,8))

function square(x,y){
    return x*y
}
console.log(square(10))

let sayMyName = function(x){
    console.log(x)
}
sayMyName("David")


function square(x){
    return x*x
}
console.log(square(20))


function point(x){
    return Math.floor (Math.random()*x)
}
console.log(point(50))
console.log(point(15))

const power = (base, exponent) =>{
let result = base*exponent;
}

const arrayToUpperCase = (x) =>{
    let theArray=x.join(",").toUpperCase
().split(",").forEach(e=> console.log(e))
}
arrayToUpperCase(["boy","girl","man","all"])

let something = function viva(x){
    let result=x*x
    return result
}

let answer = something(3)
console.log(answer)

let thename = x => console.log(x)

thename(["Micheal"])