let num:number = 10;

let money ;
money = 100;
money = "hundred";
console.log(money.toUpperCase());

let val2:unknown;
val2 = 22;
val2 = "twenty two";
if(typeof val2 === "string")
console.log(val2.toUpperCase()); 

//non-primitive data types
// array ,object ,functions

let arr:number[] = [1,2,3,4,5];
// or 
let arr1 = [1,2,3,4,5];
let arr3:(number | string)[] = [1,"tae",3,4,5];

// tuples
let tup :[string,number] = ["tae",30];

// object
let obj1:{name:string,age:number,occuption:string} = {
    name:"tae",
    age : 30,
    occuption : "singer"
}

let person:{name:string,age:number};
person = {
    name : "v",
    age : 30
}

// alices
type customer = {
    name:string,
    age :number,
    id:string
}
let c1 : customer = {
    name : "v",
    age : 29,
    id : "BTS"
}

// interface
interface admin{
    name : string,
    pos : string,
    id : number
}
let obj2 : admin = {
    name :"savi",
    pos :"nothing",
    id : 12

}