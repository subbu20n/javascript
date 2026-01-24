// ----------------------------ARRAYS-------------------------- 

// order collection 
// Homogeneous or heterogeneous 
// fixed or Dynamic 
// common operations 
// memory representation 
// multi-dimensional arrays  ... 

//--------Array Methods-------------------------
const a = [1,2,3,"hello"]  

// how to add one or more items last in an array (push) 

a.push(4,5,6,7) 
console.log(a,"push")  

// how to delete last item in an array (pop) 

a.pop() 
console.log(a,"pop")  

// how to add item in the first (unshift) 

a.unshift(0) 
console.log(a,"unshift") 

// how to remove first index item in an array (shift) 

a.shift() 
console.log(a,"shift") 

// how to remove or add specific index items in an array 

// a.splice(index, "delete count") 

a.splice(2,2) 
console.log(a)

// a.splice("index","delete count",item1,item2...)
a.splice(2,0,3,4) 
console.log(a) 

// a.splice("index","delete count",item1, item2....)
// how to remove or add specific index items in an array 
// how to remove 455 item 

b=[8,3,6,8,2,455,6] 
b.splice(5,1) 
console.log(b) // [8,3,6,8,2,6]  

b.push(1,2,3,4,5) 
console.log(b) 
console.log(b.length,"length")

b.splice(11,0,6,7,8,9,10)
console.log(b,".....end")

b.splice(3,3)
console.log(b,"...") 

// in python 'negative indexing will work' but in 'javascript negative indexing will not work"  
b.splice(3,3,)
console.log(b,"...")
console.log(b,[-1])  

//----------Array Destruction-----------------

let [first,second] = array 
console.log(first) 
console.log(second) 

let[a,b] = [1,2,3,4] 
console.log(a) 
console.log(b) 

a,b = [1,2,3,4] 
console.log(a) 

//spread operator(...) = which is used to pack the elements  
// rest parameter ... = which is used to pack the elements  

let [a,...b] = [1,2,3,4] 
console.log(a) //1 
console.log(b) // [2,3,4]

a = [1,2,3,4,5] 
console.log(...a,spread operator)  // 1 2 3 4 5 spspread operator  

function greet(...k) {
    console.log(k,'rest parameter') 

}
greet(1,2,3,4,5)  //[1,2,3,4,5],rest parameter 

//---------modify elements ---------------------

let fruits = ['apple','banana','orange'] 
fruits[1] = 'grape' 
console.log(fruits)    // ['apple','grape','orange'] 

//---------------------------Array Methods-------------------------

//--------------1.array length-------------
//length property returns the no. of elements in number 

let fruits = ['apple','banana','orange'] 
console.log(fruits.length)  // 3 

//-----------------2.Array toString()---------------
// toString() method converts an array to a comma seperated string 


let fruits = ['apple','banana','orange'] 
console.log(fruits.toString())    //apple,banana,orange 

//-----------------3.Arrat at()-------------------(negative indexing will work here ok) at() method  

let a = [1,2,3,4,5] 
console.log(a.at(-1)) //5 
console.log(a.at(0))  // 1 

// -----------------4.Array join()-------------------
// join() method joins all elements of an array into a string using a specified seperator  

let fruits = ['apple','banana','orange'] 
console.log(fruits.join('&'))  // apple&banana&orange 

//-----------------5.Array pop()-------------------------
// pop() method removes the last element from an array and return that eleemnt 

let fruits = ['apple','banana','orange'] 
console.log(fruits.pop()) // orange 
console.log(fruits)  // ['apple','banana'] 

// ------------------6.Array Push()--------------------------
// push() method adds one or more elements to the end of an array and returns the new length of the array 

let fruits = ['apple','banana']
console.log(fruits.push('orange'))   // 3 
console.log(fruits)  // ['apple','banana','orange']   

// ---------------------7.Array Shift()-------------------------

// shift() method removes the first element from an array and returns that element  

let fruits = ['apple','banana','orange'] 
console.log(fruits.shift()) // apple 
console.log(fruits)  // ['banana','orange'] 

// ------------------------8.Array unshift()---------------------

// unshift() method adds one or more elements to the begining of an array and returns the nwe length of the array 

let fruits = ['banana','orange'] 
console.log(fruits.shift()) // 3
console.log(fruits) // ['apple','banana','orange']   


// -------------------9.Array delete()--------------

// javascript provides the 'delete' operator but its not typically used for deleting the array elements , instead 
// ,you can use 'splice()' or set the leement to undefined 

// -------------------10. Array Concat()---------------
//concat() method is used to merge two or more arrays, and it does not change the original arrays 

let a = [1,2,3,4,5]
let b = [6,7,8,9,10] 
console.log(a.concat(b))  //[1,2,3,4,5,6,7,8,9,10] 

let merge_two_arrays = [...a,...b] 
console.log(merge_two_arrays)  // [1,2,3,4,5,6,7,8,9,10]  

// ------------------11.Array copyWithin()--------------------------------
// copyWithin() method copies a sequemce of elements within the array to the position starting at the target index 

// ---------------------12.Array flat()-----------------------
// flat() method creates a new array with all sub array elements concatenated into it recursively up to the specified depth 
let numbers = [1,2,[3,4[5,6]]] 
console.log(numbers.flat())   // [1,2,3,4[5,6]] 

let nested_arr = [1,[2,3,4],[6,7,[8,[9,[10,10,[11,[12]]]]]]]
console.log(nested_arr.flat(1))
console.log(nested_arr.flat(2))
console.log(nested_arr.flat(infinity)) //  [1,2,3,4,6,7,8,9,10,10,11,12]  

//-------------------13.Array splice()-------------------------- 
// splice () method changes the contents of an array by using the removing or replacing existing elements and/or adding new elements  

let fruits = ['apple','banana','orange','grape'] 
console.log(fruits.splice(2,1,'kiwi'))  // ['orange] 
console.log(fruits) // ['apple','banana','kiwi','grape'] 

//-------------------ARRAY SEARCH METHODS---------------------- 

// ----------------1.Array indexOf()----------------
// indexOf() method returns the first index at which a given elememnt can be found in the array or -1 if it is present 

// ----------------2.Array lastIndexOf()---------- 
// lastIndexOf()  method returns the last index at which a given element can be found in the array , 0 or -1, if it is not present

// ---------------3.Array includes()------------------
// includes() method determines whether an array includes a certain value among its entries, returning 'true or false' as appropriate 

// ----------------4.Array find()-----------------------

// find() method returns the first element in the array that satisfies the provided testing function otherwise , it remains undefined 

// -----------------5.Array findIndex()---------------- 
// findIndex() method returns the index of the first element in the array that satisfies the provided testing function otherwise, it returns -1. 


/// -----------'Array methods' lo "CRUD OPERATIONS" --------------

a = [] 
a.push(1,2,3,4,5) 
console,log(a)  // [1,2,3,4,5 ] 

a.pop() 
console.log(a)  // [1,2,3,4] 

a.shift() 
console.log(a)  // [1,2,3,4]  

a.unshift() 
console.log(a)  // [1,2]  

 
a.splice(2,2) 
console.log(a) 
a.splice(1,0,7,8,9) 
console.log()      //[1,7,8,9,2]  





