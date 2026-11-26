//Data types
// Primitive datatypes
// Numbers or Integer
 let  a=5.5;
 console.log(a);
 console.log(typeof(a));

 let b=200;
 console.log(b);
 console.log(typeof(b));

 // String
 var c="dad";
 console.log(c);
 console.log(typeof(c));

 var d='cat';
 console.log(d);
 console.log(typeof(d));

 // boolean
const e=true;
console.log(e);
console.log(typeof(e));

const f=false;
console.log(f);
console.log(typeof(f));

// undefined

let g;
console.log(g);
console.log(typeof(g));
 
// null

var h=null;
console.log(h);
console.log(typeof(h));

// non-primitive data type

// object

let person={
    firstName:"suresh",
    lastName:"Kumar",
    age:23,
    address:{
        city:"chennai",
        state:"tamilnadu"
    },
    course:"java fullstack"

};
console.log(person);

// how to get the particular value.

//dot notation.
console.log(person.firstName);
console.log(person.lastName)
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state);

// bracket notation.
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['address']['city']);

// get only keys.

console.log(Object.keys(person))

// get only values.

console.log(Object.values(person));
 
// get entreis.

console.log(Object.entries(person));


// how to delete the values.

delete person.age;
console.log(person);

// how to add the values.

person.gender="Male";
console.log(person);

// how to update the values.
 person.firstName="Arun";
 console.log(person);  

