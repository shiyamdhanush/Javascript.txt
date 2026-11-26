// operators

// Arithmatic operators.
// let a=4;
// let b=2;
// let c=a+b;
// console.log(c);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// // increment operators
//  let d=4;
//  console.log(d++);
//  console.log(d);
 
//  console.log(++d);
//  console.log(d);

// // Assignment operators.
// let s=4
// var r=5;
// console.log(s=r); // s=5.
// console.log(s+=r);//(s+=r means s=s+r;) now s value is 5 so s=s+r=10.
// console.log(s-=r);//(s-=r means s=s-r;) now s value is 10 so s=s-r=5.
// console.log(s*=r);//(s*=r means s=s*r;) now s value is 5 so s=s*r=25.
// console.log(s/=r);//(s/=r means s=s/r;) now s value is 25 so s=s/r=5.
// console.log(s%=r);//(s%=r means s=s%r;) now s value is 5 so s=s-r=0.


// comparison operators.

// relational operators.

 let a= 10;
 let b=20;
console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);

// Equality operators.

let z=1;
console.log(z===1);
console.log(z!==1);

// Strict equality operator.

console.log(1===1);
console.log('1'===1);

// lose equality operator.

console.log(1==1);
console.log("1"==1);
console.log(1!=1);


// String comparison.

console.log("Angel"<"Ankitha") // based on hash key value. now compare : g<k.

// comparison of different data types.

console.log("5"<7);
console.log(true==1);

// Logical operators.

// and(&&) operator.

console.log(true&&true);
console.log(true&&false);
console.log(false&&false);

// or(||) operator.

console.log(true||true);
console.log(true||false);
console.log(false||false);


// not(!) operator.

console.log(!true);
console.log(!false);

// Ternary oprator.

let mark = 40;
let n= mark>35 ? "pass":"fail";
console.log(n);


// Bitwise operator.

// 0-> 000000
// 1-> 000001
// 2-> 000010

//1&2->000000 -> 0
//1|2->000011 ->3

// 3-> 000011

console.log(1&2);//0
console.log(1|2);//3