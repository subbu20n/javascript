//--------------------------shallow & deep copy-----------------------------------

// primitive datatypes all will store in 'stack memory' --(call by value)
// non primitive datatypes all will store in 'heap memory' --(call by reference)

a = 10 
b = a 
b = 13 

print(a,b)  // 10 13  

c = [1,2,3]  
d = c 
d[0] = 5  
print(c,d)  // [5, 2, 3] [5, 2, 3]

// shallow copy  (creates a new memory)   call by reference with same 

//import copy  

c = [1,2,3]  
d = copy.copy(c)  //shallow copy 
d[0] = 5  
print(c,d)  //[1, 2, 3] [5, 2, 3]

c = [1,2,3,[4,5]]  
d = copy.copy(c)  //shallow copy 
c[0] = 5  
c[3][0]=10 
print(c,d)  //[5, 2, 3, [10, 5]] [1, 2, 3, [10, 5]]  nested array will change both here for that purpose we have deep copy 


// deep copy   -- call by reference with diff value  

c = [1,2,3,[4,5]]  
d = copy.deepcopy(c)  //shallow copy 
c[0] = 5  
c[3][0]=10 
print(c,d)  // [5, 2, 3, [10, 5]] [1, 2, 3, [4, 5]]


// -------------now JAVASCRIPT  ------------(shallow and deep copy) 

// shallow copy 


c = [1,2,3,[4,5]] 
d = [...c] // spread operator 
c[3][0]=10 
console.log(c,d) // [5, 2, 3, [10, 5]] [1, 2, 3, [10, 5]] 

//-------------deep copy----------JSON sprinify method 

c = [1,2,3,[4,5]] 
d = JSON.parse(JSON.stringify(c)) // spread operator 
c[3][0]=10 
console.log(c,d) // [5, 2, 3, [10, 5]] [1, 2, 3, [4, 5]]


let person1 = {
    name: 'subbu',
    age: 21
}

person2=person1 
person2.name='subbus' 
console.log(person2,person1)  // { name: 'subbus', age: 21 } { name: 'subbus', age: 21 }

let person1 = {
    name: 'subbu',
    age: 21
}

person2={...person1}
person2.name='subbus' 
console.log(person2,person1) // { name: 'subbus', age: 21 } { name: 'subbus', age: 21 }