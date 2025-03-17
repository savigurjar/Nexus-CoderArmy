interface Person {
    name: string;
    age: number,
    gender: string
    occuption?: string //optional
}

const obj: Person = {
    name: "tae",
    age: 29,
    gender: "male",
    // occuption:"singer"
}

// latest example
// partial<>,required<>,readonly<>
interface customer {
    name: string,
    age: number,
    balance: number
}
// partial<> : sari properties optional
//readonly<> : readonly me changes nhi kr skte
const obj2: Partial<customer> = {
    name: "v",
    age: 30,
}

// array of objects
interface people { name: string, age: number }
interface manager { salary: number, id: string };
// const arr: { name: string, age: number }[] = [{ name: "v", age: 30 }, { name: "sv", age: 21 }];
// or
// const arr: people[] = [{ name: "v", age: 30 }, { name: "sv", age: 21 }];
const arr: (people | manager)[]= [{ name: "v", age: 30 }, { name: "sv", age: 21 }, { salary: 300, id: "12" }];






// function in typescript

function greet(a: number): number {
    console.log(a);
    return a + 5
}
console.log(greet(10));

// two arguments
function meet(msg: string, val: number) {
    console.log(msg, val);
}
meet("hello", 7);

// default parameter
function nit(msg:string = "yo"){
    console.log(msg);
}
nit();
nit("yohoho");

// optional parameter
function gate(per:string)
{
    console.log(per || "tae");
}
gate("v");
// gate();

// arraow function
const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(12,30));

// call back function
function placeOrder(order:number,callback:(amount:number)=>void):void{
  const amount:number = order+10;
  callback(amount);
}
placeOrder(10,(amount)=>{
    console.log(amount);
});
