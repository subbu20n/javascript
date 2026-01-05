// ----------------------JAVASCRIPT---------------------------------

print('subbu') // does not work in js

console.log('subbu')  //same like print statement in 'JS' 

document.write('subbu')  // external JS' to create a index,html and acces with external js 

// ------------------variables-------------------

//variables: are the storing the conatiners for storing the data value. here are some notes about a container  
// key words----[var,let,const]

name="sairam"
console.log(name) 

var name; //declaration 
var age = 20 //intialization 
name = 'sai' //assigning 

var name; //re-declaration
name = 'akhil' // reassignment  

// var is redclare and reassign 

var fruits='apple'
var fruits='grapes' 
console.log(fruits) 


//let - we cant re-declare , but we can re-assign 

// let softdrink='script' 
// let softdrink='maaza' 
// let softdrink='sprite' 
softdrink='maaza' //reassign is possible 

// const- we cant re-declare and reassign 

const pi=3.14 
pi = '4' 
console.log(pi) 

// ------------ SCOPES-----------

//  LOCAL VARIABLE 
//   GLOBAL VARIABLE 

var dog = 'chimtu'  // this is global variable 

function add(){
    console.log(dog) // we can access inside the global varible
}

add() // chimtu  

//-----------

function add(){
    // this is gated community 
    var dog = 'chimtu'     // this is local varibale
}
add() 
console.log(dog) //reference errro dog is not defined 

//-------------Hoisting--------------------

console.log(a) //not defined 
var a;             // this declaration is moved to top  even before the code execution hoisting  
a = 10
console.log(a)  // 10 

console.log(a) 
let a = 30 
a = 20 
console.log(a)


// VAR - var is function scops -it works only inside the function block 
// LET, CONST - both are blocked scopes - it works only inside the block 

{
    var dog = 'chimtu'
}
console.log(dog) //chimtu 

{
    let dog='bablu'
}

console.log(dog) // dog is not defined 

{ 
    const dog = 'bablu' 
}

console.log(dog) // dog is not defined 

