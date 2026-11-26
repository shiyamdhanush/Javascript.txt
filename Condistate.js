// Control Statements.

// Conditional Statements(if, if else,else if,switch case).

let a=5;
if(a>0){
    console.log("positive number.");
}
else{
    console.log("negative number.");
}

//Conditional Statements with logical operators (and && , or ||).

// and(&&)

var b = 20;
if(b>0 && b%2==0){
    console.log("positive and even number.");
}
else if(b>0 && b%2!=0){
    console.log("pasitive and od number.");

}
else if(b<0 && b%2==0){
    console.log("positive and odd number.");

}
else{
    console.log("negative and odd number.");
}

// or(||)

let pass = true;
let fail = false;
if(pass==true || fail==false){
    console.log("this is true.");
}
else if(fail==false||fail==false){
    console.log("this is false.");
}
else{
    console.log("something went wrong.");
}

        // or

if(fail || fail){
    console.log("Fail.");
}
else{
    console.log("else also fail.");
}


// Switch case.

let d= 10;
switch(d){
    case(2):{
        console.log("2 is the answer.");
        break;
    }
    case(4):{
        console.log(" is the answer.");
        break;
    }
    case(8):{
        console.log("8 is the answer.");
        break;
    }
    case (10):{
        console.log("10 is the answer.");
        break;
    }
    default:{
        console.log("no one is matching.");
    }
}




