// ----------------------------Number & MATH methods------------------- 

// ---------------Number Methods ----------------- 

a = "16hjikhgt" 
console.log(parseInt(a)) //16 

a = "16hjikhgt17"  // only first number will took  
console.log(parseInt(a))  //16 

a = "16.7h7.9jikhgt17" 
console.log(parseFloat(a))  // 16.7 


// -------------------MATH Methods----------------------- 

// 'abs' --> negative numbers ni positive ga convert cheyadam 

console.log(Math.abs(-900))  //900 

// math.ceil(0.1) --> ceil will do '0.1' next integer will give  

console.log(Math.ceil(0.1),"ceil")   // 1 ceil  
console.log(Math.ceil(0.0),"ceil")   // 0 ceil 

// floor()   --> 0.1  it gives previous integer  

console.log(Math.floor(0.9),'floor')  // 0.1 or more preious  // 0 floor 

// round 0.5 or more next integer number 
// rand 0.5 below previous integer number 

console.log(Math.round(1.5),'round')  // 2 round 
console.log(Math.random(1.4),'round') // 1 round  

// max 

console.log(Math.max(1,2,3,4,5,6,77,8,9),max)  // 77 max 

// min 

console.log(Math.min(1,2,3,4,5,6,77,8,9),min)  // 1 min 

// --------------------------Date Method----------------------- 

// date 

date = new Date() 
console.log(date)  

date=Date() 
console.log(date)  

date = newDate() 
console.log(date.getMonth())  
console.log(date.FullYear())
console.log(date.getTime())
console.log(date.getDate())
console.log(date.getHours()) 

// how to get IST time in 'JS' --. google search copy code and paste  

let a = new Date() 
ISTTime=330 
// b = a.getTimeZoneOffset() // no need offset just kept 
let ist_time= new Date(a.getTime()+(ISTTime +b)*60000) 
hours = ist_time.getHours() 
minutes = ist_time.getMinutes() 
seconds = ist_time.getSeconds() 
console.log(hours+":"+minutes+":"+seconds) //12:13:38 


