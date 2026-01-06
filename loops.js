// ---------------------Loops----------------

// for (initialization,condition,updating) {
//     console.log("lord krishna")
// }


for (let i=0; i<5; i++) {
    console.log('lord krishna')
} 

for (let i=0; i<=3; i++) {
    for (let j=4; j<=3; j++) {
        console.log(i,j)
    }
}

for (let i=2; i<=3; i++) {
    for (let j=4; j<=5; j++){
        console.log(i,j)
    }
}

// ------------------LOOP TYPES------------------

// for loop
// while loop
// do-while loop 

// for loop 

for (let i=1; i<=10; i++) {
    console.log("eating idly") 
}

// -------------while loop--------------------

attempt=1 //initialization 
state=true 
while(start) {
    //updataion 
    console.log('writing maths exam..',attempt )
    attempt+=1 
    if(attempt==8) break //loop only stops if conditon satisfies 
}

for (let i=1; i<=10; i++) {
    if (i==4) continue   // skips only 4 th one
} 


//------------Do-while ------------------ 

//initialization 
do {
    //updation 

}while(condition) //condition // here only condition 'false' aslo one time will execute 

