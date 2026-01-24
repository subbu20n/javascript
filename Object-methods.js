// -------------------------Object Methods---------------------------

// --------- CRUD OPERATIONS --------------- 

// create access update delete  

// ----"CREATE"--object ways--- 

// let person = {
//     name: 'kajol' ,
//     no_of_movies: 67,
//     awards: 24
// // } 

// let person1 = {} 
// let person2=Object.create({}) 
// console.log(person1) //{}
// console.log(person2) // {}

// // ----"Access" using dot nation ----- 

// console.log(person2.name) // kajol 
// console.log(person["no_of_movies"]) //67 

// //-----"Update" -----------

// person.no_of_movies=68 
// console.log(person.awards+2)  // 26 

// person.awards=person.awards+1 
// console.log(person) // {name:'kajol',no-of_movies:68, awards:25}  

// person.no_of_movies=person.no_of_movies+2 
// console.log(person)   // {name:'kajol',no-of_movies:70, awards:25}

// // ---------Delete------------- 

// delete person.awards   // {name:'kajol',no-of_movies:70} 
// console.log(person)    

// // -------Create ways ---------------------

// // let obj = {} 
// let user = Object.create({},{
//     id: {value:101},
//     name:{value:"kavya"}
// }) 
// console.log(user.id) // 101 
// console.log(user.name) //kavya 

// // 1st way 
// let obj = Object.create({name:'sai',age:20}) 
// console.log(obj.age) // 20 
// console.log(obj)  // {}
// console.log(obj.name) // sai  

// // 2nd way 

// let obj1= object({name:'raju'}) 
// console.log(obj1) // {name:'raju} 

// let obj1 = new object({name:'raju'}) 
// console.log(obj1)   // {name:'raju}  

// // dot and bracket access 
// // dot and bracket update 
// // dot and bracket delete  

// console.log(obj1.name) // accessing with dot notaion  // raju 
// console.log(obj1['name']) // accessing with bracket notaion // raju 

// console.log(obj1.name='venu wonders..') // updating with dot notaion // venu wonders 
// console,log(obj1['age']=25) // updating with bracket notation // 25 

// delete obj1.name // delete with dot notation 
// console.log(obj1)  // {age:25} 

// delete obj1['age'] // delete with bracket notation 
// console.log(obj1)   // {} 

// // --------------------------objects and objects methods-------------------------- 

// // what is object  
// // Javascript is a object based language 

// // in JS  everything is an object (except for key words, operators and constructors) 
// // An object is a unordered collection of data in key value pairs 
// // object is a non primitive data type 
// // object stores in keep heap memory 
// // object can be a accessible through named index 

// let person = {name:'sai', age:45,awards:7,no-of_movies:43}
// for(let key in person) {
//     console.log(key,person[key]) // here dot notaion does not work 
// }

// // name sai 
// // age 45 
// // awards 7 
// // no-of-movies 43 

// //  ----object---- 
// //  for in ---> keys "keys will come in obects when we iterates" 
// //   arr[]   name, age 

// // for in  --> index (vastundi) 
// // for of  --> values(vastayi) 

// for (let key in person) {
//     Array.push(key) 
// }

// console.log(arr)  // ['name','age','awards','no-of_movies'] 


// // keys []   // name,age 
// // values[]  // sai,45 
// // for in   --> index 
// // for of   --> values 

// for (let key in person) {
//     key.push(key) 
// }
// console.log(keys)  // keys will come  // ['name','age','awards','no-of_movies'] 


// for (let key in person) {
//     values.push(key) 
// }
// console.log(values)  // values will come ['sai',45,7,43] 

// // time complexity reduce cheyacchu 2 times rayakunda 

// for (let key in person) {
//     keys.push(key) 
//     values.push(person[key]) 
// }
// console.log(keys) // ['name','age','awards','no-of_movies'] 
// console.log(values) // ['sai',45,7,43]  

// let key_values = [] 
// for (let key in person) {
//     keys.push(key) 
//     values.push(person[key]) 
// }
// keys_values.push(keys,values)  // keys and values will come here 
// console.log(key_values)  // ['name','age','awards','no-of_movies'['sai',45,7,43]  ]

// //

// let person={name:'sai',age:45,awards:7,no_of_backlogs:43} 
// keys=[] 
// values=[] 
// console.log(objects.keys(person)) // ['name','age','awards','no-of_movies'] 
// console.log(objects.values(person))  // ['sai',45,7,43]
// console.log(objects.entries(person)) // key and values vastayi 

// // [name sai ]
// // [age 45] 
// // [awards 7] 
// // [no-of-backlogs 43] 


