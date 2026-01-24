//-------------------------String Methods-------------------------

// A string is a data type used to represent text rather than numeric data. Its called a string because its essentially
// a string of characters , where a character is a single unit of text, such as letter, digit, punctuation mark. or whitespace strings are for storing text 

// strings are written with quotes (single/double) back tics  

// here are some key points about strings  

// Immutable 
// Encapsualation 
// character Encoding 
// Length 
// Oeration  
// Escaping Characters 
// Declaration 
// Concatenation 

// Declaration


let name = 'subbu' 

console.log(typeof(name))


// Concatenation

// let name = 'subbu' 
let surname = 'nandyala' 

console.log(name+" "+surname)  //subbu nandyala


// Length 

console.log(name.length) //5 

// Accessing characters  

// note by using only positive indexing we can accessing only 

console.log(name[4])   // u 
console.log(name[-1])  //undefined   //negative indexing wont work here  

// string charAt( ) 

//returns the character at a specific index in string 

console.log(name.charAt(0)) // s 
console.log(name.charAt(-1))  //undefined 

// string charCodeAt()

// return the unicode value of character at a specified index in a string 

console.log(name.charCodeAt(0))  // 115 
console.log(name.charCodeAt(1))  //97 

//string at() (in this negative indexing will work)

console.log(name.at(0)) // s 
console.log(name.at(-1)) //u 

// string [] 
// provide a way to access the character at a specified index at a string 

//let str = 'hello' 
console.log(str[1]) // e 

// string slice() 

// Extracts a section of a string and returns it as a  new string  

// let str='Hello,world!' 
// console.log(str.slice(7,12))  // world  

// // string substring () 

// let str='Hello,world!' 
// console.log(str.slice(7,12))  // world  

// // string to uppercase() 

// let str='hello world!' 
// console.log(str.toUpperCase()) 

// // string to Lowercase() 

// let str='hello world!' 
// console.log(str.toLowerCase()) 

// // string Concat() 

// // string trim() 

// let str = 'Hello ,world!' 
// console.log(str.trim()) 

// // string padString() 

// let str = '5' 
// console.log(str.padStart(3,'0')) 

// let a = '5'
// let b = '17' 

// console.log(a.padStart(3,'0')) 
// console.log(a.padStart(3,'0')) 
// console.log(a.padStart(5,'0')) 

// // string Repeat() 

// let str='Hello' 
// console.log(str.repeat(3)) 

// // string replace() 

// let str='Hello world' 
// console.log(str.replace('world,','subbu'))

//------------------STRING METHODS IN CRUD OPERATIONS"------------------
glass = 'milk' 
glass = 'water'  // reassign 
console.log(glass)  //water 

//string 
console.log(glass.length) //5 

// concat 

milk_glass = 'milk' 
water_glass = ' water' 
console.log(wtaer_glass+" "+milk_glass)  // water milk 
console.log(water_glass.concat(" ",milk_glass,"juice")) // water milk juice 
console.log(wtaer_glass.trin()) // spaces will remove water 

var name = 'hari' 
var name = "hari" 
var name = `hari` // string interpolation or Template literals   
console.log(name)  // hari 

// read 
console.log(name[1]) // a  
console.log(name[-1]) // undefined 
console.log(name.at(-1))   // i  

var name = 'HaRi' 
console.log(name.toUpperCase()) // HARI 
console.log(name.toLowerCase()) // hari 

