// Looping Statements (for,while,do-while,for-in,for-of).

for(let i=1;i<=10;i++){
    console.log(i);
}

// in reverse.


for(let i=10;i>=1;i--){
    console.log(i);
}


// While Loop (Entry checking loop).

var f=1;
while(f<=5){
    console.log(f);
    f++;
}

// Reverse.

var f=5;
while(f>=1){
    console.log(f);
    f--;
}


// Do-While (Exit checking loop).

let s = 5;
do{
    console.log(s);
    s++;
}
while(s<=10);


for(let x=1;x<=10;x++){
    if(x%2==0){
        console.log(x);
    }
}


// For in loop (index based).

// object.
let person={
    name:"siva",
    age:21,
    gender:"male",
};
console.log(person);
for (const key in person) {
    //console.log(key);
    //console.log(person[key]);
    console.log(key+":"+person[key]);
    
    
}


//Array

let colors=["red","green","orange"];
console.log(colors);
 for (const key in colors) {
    //console.log(key);
    console.log(colors[key]);
  
    
    
 }


 // For of loop(value based).

 for (const element of colors) {
    console.log(element);
 }


