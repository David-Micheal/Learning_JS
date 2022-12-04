// let something = (x)=>{
//     let result = x+x;
//     x=15;
//     return x
// }
// console.log(something(5))

// x = 100
// let result = x + x
// // console.log(x)
// let correct = x * x
// x = 15;
// console.log(x)
// console.log(result)


// function something (x=10,y=10,z=10){
//     let result = x + y + z
//     return result
// }
// console.log(something(6,8,7))



let savedPassword = "DavidMicheal2003"
let savedUserName = "David Micheal"

let loginPasswordInput = "DavidMicheal2003"
let loginUserNameInput = "David Micheal"

if (savedPassword === loginPasswordInput && savedUserName === loginUserNameInput){
    console.log("Login Successful")
}else if(savedPassword !== loginPasswordInput && savedUserPassword !== loginUserNameInput){
    console.log("Incorrect Input")
}else if(savedPassword !== loginPasswordInput){
    console.log("check password")
}else if(savedUserName !== loginUserNameInput){
    console.log("wrong username")
}else{console.log("Login Failed")}




let savedEmail = "davidmicheal@gmail.com"
let savedGender = "male"

let newEmail = "davidmicheal@gmail.com"
let newGender = "male"

if ((savedEmail === newEmail)&&(savedGender === newGender)){
    console.log("Login Successful")
}else if((savedEmail !== newEmail)&&(savedGender !== newGender)){
    console.log("Login Failed")
}else if(savedEmail !== newEmail){
    console.log("wrong email")
}else if(savedGender !== newGender){
    console.log("wrong gender")
}else {
    console.log("incorrect login")
}
