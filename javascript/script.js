console.log("Hello World!");
//reinitialize and redeclare
var a;
a=10;
var a;
a=20;
//reinitialize
let c=10;
// let b;
c=20;
//can't redeclare or reinitialize
const d=30;//block scope
console.log(a);
console.log(c);
console.log(d);

var num=10;//number
var str="sushuu";//'' "" ``//string
var bool=true;//boolean
var un;//undefined
var nu=null;//object
var big=1234567890987654n; //bigint
var symbol=Symbol('li');//symbol

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof symbol);

var arr=[1,2,3,4,5] //array
console.log(typeof arr); //object

var Obj ={
    name:"Vikram",
    dept:"DS"
}
console.log(Obj);
console.log(typeof Obj);

 //Arithmatic operator

 var a=10;
 var b="20";
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 console.log(a**b);

 //Relational operator

 var a=10;
 var b=20;
 console.log(a==b);
 console.log(a===b);
 console.log(a!=b);
 console.log(a!==b);
 console.log(a>b);
 console.log(a<b);
 console.log(a>=b);
 console.log(a<=b);

 //Logical operator

 var a=true;
 var b=false;
 console.log(a&&b);
 console.log(a||b);
 console.log(!a);


