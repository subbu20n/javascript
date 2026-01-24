//-----------------------Bom (browser objject model)---------------------- 

dom --> document variable lo store avutayi andi 
bom --> window variable lo vunatyi andi 

console.log(window)  

// using 'for in loop' we are iterating object 

for (let key in window) {
    console.log(key)
} 

// -- undersatnding the browser object model ------ 

// INTRODUCTION 

// define the browser object 
// explain its role in web developmwnt  

// // context 
// Highliht how it is part javascript language  
// mention its relevance in 'manipulating and iterating' with the browser  

// //  -------browser object method objects --------------- 

// window object 
// document object  
// navigator onject 
// location object 
// history object 

// -----------------WINDOW object---------------- 

description: The window object represents an open window in a browser  

// --methods and properties--------
window.open(): opens a new browser window  
window.close(): closes the current window  
window.alert(): displays an alert dialog 
window.confirm(): displays a confirmation dialog 
window.prompt(): displays a prompt dialog for user input  

window.alert("hello")  // no need to write always 'window' we can directly write alert('hello')
alert("hello all") 

window.confirm('are you sure want to relocate?') 

let res = confirm('are you sure want to relocate') 
if(true){
    console.log('you are selected')
}else {
    console.log("you are not fit for my company")
}

//----------prompt--
let age = prompt("enter your age:") 
if(age>=18){
    console.log("you are eligible to vote")
}else {
    console.log("you are not eligible to vote") 
}

// --windoe.open()--- 
open("https://www.amazon.in/") 

// window.close() 

close() 

// ----------------------Navigator object------------------
// description: the navigator object provides informationabout the browser 

// methods and properties: 
navigator.userAgent: returns the user agent string 
navigator.platform: returns the browsers platform 
navigator.language: retunr the browsers language 

console.log(window.navigator)  // it have more you can check it all 
console.log(navigator.online) 
console.log(navigator.deviceManager) 
console.log(navigator.locks) 
console.log(navigator.storage) 
console.log(navigator.appName)


// --------------------------Location object-------------------------
// description: The location object conatins information about the current url 

// methods and properties:

location.href: gets or sets the url of current page 
location.reload(): reloads the current page  
location.assign(): loads a new document  

console.log(location) 
console.log(location.hostname) 
console.log(location.pathname) 
console.log(location.href) 
console.log(location.reload) 
console.log(location.reload()) 
console.log(location.assign("https://www.myntra.com/")) // it opens a new page with myntra website  
location.href="https://www.myntra.com/"  // it opens a directly that myntra page  

// -------------------------------History object------------------------- 

//Description: The history object allows manipulation of the browsers session history 

// methods and properties: 
history.back(): moves to the previous page in history 
history.forward(): moves to the next page in history 
history.go(): Loads a specific page from the session history 

history.back()
history.forward() 
history.go(-2) // 2 steps back will come webpages  
history.go(2) //2 steps forward will move webpage  

//----------higher order function---------------
// setTimeout(function()){} 

setTimeout(function(){
    console.log('happy birthday')
},5000)  // it comes in console after 5 minutes automaticatlly 'happy birthday' 

// setTime 
// setTime function which is used to execute at specific amount of time 
// it will execute only one 
// how to clear the timeout using 'clearTimeout' 

// setInterval() 
// it will execute specific interval of time 
// how to clear interval using clear interval 

setInterval(function(){
    console.log("buzzer") 
},2000)  // every 2 seconds ki it will executes  

let count=30 
let id=setInterval(function(){
    console.log(count)
    count-=1 
},2000) 

setTimeout(function(){
    console.log('after 10 seconds it will execute')
    clearInterval(id) 
},1000)


let bomb = setTimeout(function(){
    console.log("bomb blast")
},5000) // it has to guess it 5 seconds  before  

let ans = prompt('guess 2+3=')
if(ans==5){
    clearTimeout(bomb) 
    console.log('you saved the country')
}else {
    console.log('your answer is wrong please try to save your country with in 5 seconds') 
}

// ---------scopes---------
for (let i=0; i<5; i++){
    setTimeout(function(){
        console.log(i)  // it executes at a time 
    },2000) 
}

// 0
// 1
// 2
// 3
// 4 

let i;
var i;
for (i=0; i<5; i++){
    setTimeout(function(){
        console.log(i) 
    },2000)    
}
