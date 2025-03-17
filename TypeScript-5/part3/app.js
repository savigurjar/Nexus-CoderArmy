"use strict";
const obj = {
    name: "tae",
    age: 29,
    gender: "male",
    // occuption:"singer"
};
// partial<> : sari properties optional
//readonly<> : readonly me changes nhi kr skte
const obj2 = {
    name: "v",
    age: 30,
};
;
// const arr: { name: string, age: number }[] = [{ name: "v", age: 30 }, { name: "sv", age: 21 }];
// or
// const arr: people[] = [{ name: "v", age: 30 }, { name: "sv", age: 21 }];
const arr = [{ name: "v", age: 30 }, { name: "sv", age: 21 }, { salary: 300, id: "12" }];
// function in typescript
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
// two arguments
function meet(msg, val) {
    console.log(msg, val);
}
meet("hello", 7);
// default parameter
function nit(msg = "yo") {
    console.log(msg);
}
nit();
nit("yohoho");
// optional parameter
function gate(per) {
    console.log(per || "tae");
}
gate("v");
// gate();
// arraow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(12, 30));
// call back function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
