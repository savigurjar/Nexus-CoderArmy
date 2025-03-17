// non-primitive
//array
let arr = [10,20,30,"ok"];
console.log(arr);
console.log(typeof arr);

//object
// key:value
let obj = {
   user_name: "savi",
   account_number: 877,
   balance:7
}
console.log(obj);
console.log(typeof obj);

//function
// function ko variable ke ander store kr skte h 
let fn = function(){
console.log("hello");
}
fn();
console.log(typeof fn);

// type conversion
let acc_bal = "700";
let num = Number(acc_bal);
console.log(num);
console.log(typeof num);
console.log(typeof acc_bal);

// boolean convert to number
let x = true;
console.log(Number(x));

// null 
let x1 = null;
console.log(Number(x1));

// undefined 
let x2 = undefined;
console.log(Number(x2));

// increment decrement
let sum = 30;
console.log(sum++);
console.log(sum);