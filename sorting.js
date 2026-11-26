// Sorting.

let a =[8,7,6,5,4,3,2,1];

// Sort();

a.sort();
console.log(a);

let b = [544,6545,234,876,98];
b.sort();
console.log(b);// sorting elements based based on first number of the values. ex:[ 234, 544, 6545, 876, 98 ].


//compare function.

//Ascending order.

b.sort(function(a,b){ //544-6545=-6001 | 544-234=310->[234,544,6545,876,98]
    return a-b
})
console.log(b);

//descending order.

b.sort(function(a,b){ //544-6545=-6001 | 544-234=310->[234,544,6545,876,98]
    return b-a;
})
console.log(b);

// Array of objects.

let c=[
    {id:21,name:"Chandru",salary:10000},
    {id:13,name:"Arun",salary:15000},
    {id:43,name:"Babu",salary:12000},
];


//Ascending order.

c.sort(function(a,b){
    return a.salary-b.salary;
})
console.log(c);

//descending order.

c.sort(function(a,b){
    return b.salary-a.salary;
})
console.log(c);


// Sorting string values in array of object.(based on hash key value).


//Ascending order.

c.sort(function(a,b){
    if(a.name<b.name){
        return -1;
    }
    else if(a.name>b.name){
        return 1;
    }
    else{
        return 0;
    }

})

console.log(c);


//descending order.

c.sort(function(a,b){
    if(a.name<b.name){
        return 1;
    }
    else if(a.name>b.name){
        return -1;
    }
    else{
        return 0;
    }
})
console.log(c);

// Array methods.

// Reverse();

let d=[1,2,3,4,5,6,7];
d.reverse();
console.log(d);

// every();

let e=[10,20,30,40,50];
let f=e.every(function(val){
    return val>18;
})
console.log(f);

//Some();

let g=e.some(function(val){
    return val>18;
})
console.log(g);


// map();

let m=[1,2,3,4,5,6];
let s=m.map(function(val){
    return val*2;
})
console.log(s);


// Array of objects.

let y=[
    {id:21,name:"Chandru",salary:10000},
    {id:13,name:"Arun",salary:15000},
    {id:43,name:"Babu",salary:12000},
];

let p=y.map(function(val){
    return val.name+":"+val.salary;
})
console.log(p);