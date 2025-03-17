// let obj = {
//     name: "ayane",
//     age : 30,
//     city : "tokyo"
// }
// for in loop , i can iterate over keys in an object
// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }
// Object.defineProperty(obj, 'city',{
//     writable:true
// })
// obj.city = "kyoto";
// console.log(obj.city);

let obj = {
    name: "ayane",
    age: 30,
    city: "tokyo"
};

Object.defineProperties(obj, {
    name: { writable: true },
    city: { writable: true }
});

obj.city = "kyoto";
obj.name = "savi";

console.log(obj.city, obj.name); // Output: kyoto savi


