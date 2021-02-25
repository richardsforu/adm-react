//console.log('--- index.js is loaded...');

//--------------
// functions
//--------------

// w3c 
// ecma script : ES - 5 
// ES-6 recamended to write code in JavaScript

/*
function abc(n1,n2) { // ES-5
    console.log('-- hello abc ..');
    return n1+n2;
}

console.log(abc(10,20));


let xyz=(a,b)=>a+b; // ES-6

console.log(xyz(100,200));


*/

/*
// desture

let data = () => {

    let d1 = () => "This is D1"
    let d2 = () => "This is D2"
    let d3 = () => "This is D3"
    let d4 = () => "This is D4"

    return { d1, d2, d3, d3, d4 }
}

let { d1, d2, d3, d4 } = data();


*/


//import  v1 from '/utils/validations.js';

//v1();


class Abc {  // Es6
    constructor(x) {
        console.log('-- constructor ' + x);
        this.x = x;

    }

    display() {
        console.log('X: ' + this.x);
    }

}

let a = new Abc(100);
a.display()







