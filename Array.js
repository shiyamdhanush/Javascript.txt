// Array.


let arr=["Java",10,true,null,2.98,'M'];
console.log(arr);


//how to get the value.

console.log(arr[1]);

// how to add the value in array.

arr[1]="Html";
console.log(arr);

// how to delete the value in arary.

delete arr[1];
console.log(arr);
 
//Flat(); -> for combine multiple array values into single Sting values.

let b=[[1,2],[3,4],[5,6]]
let a=b.flat();
console.log(a);

// toString();

let s=arr.toString();
console.log(s);


// Adding elements in Array.

let colors=["red","Green","blue"]

//Push(); (for adding a element in end of the array).

colors.push("pink");
console.log(colors);

//unshift(); (for adding a element in start of the array).

colors.unshift("White");
console.log(colors);

// splice(); (for adding the elements in middle of the array).

colors.splice(1,0,"violet");
console.log(colors);


// Deleting elements in array.

// pop();(for deleting last element of the array).
colors.pop();
console.log(colors);

// shift();(for deleting First element of the array).

colors.shift();
console.log(colors);

// splice();(for deleting middle elements of the array).

colors.splice(1,1,"yellow");
console.log(colors);

// removing all the values in array.

let arr1=[10,20,30,40,50];

// declear array empty.

arr1=[];
console.log(arr1);

//splice.

arr1.splice(0,arr1.length);
console.log(arr1);

// pop();

let arr2=[10,20,30,40,50];
while(arr2.length>0){
    arr2.pop();
}
console.log(arr2);


// combination of two arrays.

let v1=[10,20,30,40];
let v2=["java","html","css","python","javascript"];

// concat.

var v3=v1.concat(v2);
console.log(v3);

// spread operator

let v4=[...v1,...v2];
console.log(v4);

//Join();
console.log(v2.join("@"));

// spilt.

let s1="I am learning javascript";
let s2=s1.split("a");
console.log(s2);

// Finding an element in array.

let colors2=["red","blue","green","purple","violet","white"];

// IndexOf();

console.log(colors2.indexOf("blue"));

// LastIndexOf();

console.log(colors2.lastIndexOf("green"));
console.log(colors2.lastIndexOf("black"));


// Includes();

console.log(colors2.includes("pink"));

if(colors2.indexOf("black")!==-1){
    console.log("true");
}
else{
    console.log("False");
}

// Array of object.

var tom=[
    {id:1,name:"apple",price:10},
    {id:1,name:"orange",price:20},
    {id:1,name:"apple",price:30},

];


// find();

let result=tom.find(function(toms){
    return toms.name==="apple"
}) 
console.log(result);

//findIndex();

let mat=tom.findIndex(function(toms){
    return toms.name==="apple"

})
console.log(mat);


// Filter.

let bat=tom.filter(function(toms){
    return toms.name=="apple";
})
console.log(bat);



// extracting values in array.

 var ar=["Arun","Tharun","varun","saran","karan"];

 // Slice();

 var set =ar.slice(1,3);
 console.log(set);


 // Looping Statements in Array.

 // forEach.

 ar.forEach(function (rat){  // *array name.for(function (rat))
    console.log(rat);
 })


 // for loop.

 for(let r=0;r<=ar.length;r++){
    console.log(arr[r]);
 }

 // forIn loop.

 for (const key in ar) {
    //console.log(key);
    console.log(ar[key]);//*

 }

 // for of loop.

 for (const element of ar) {
    console.log(element);
    
 }

 

