const fun = ()=>{
    console.log("hello coder");
}
fun();

const fun1 = (num1 , num2)=>{
    return num1+num2;
}
console.log(fun1(12,30));

const fun2 = (num1 , num2)=> num1+num2;
console.log(fun2(12,30));

let obj = {
    name:"tae",
    age:30
}
function fn(obj1)
{
obj1.name = "v";
// pass by refrence
console.log(obj1);
}
fn(obj);
console.log(obj);