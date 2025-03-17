const arr = [1,2,3,"tae",true];
const newarr = structuredClone(arr);
console.log(newarr);
console.log(arr.slice(1,3));
// console.log(arr.splice(1,3));
console.log(arr.splice(1,3,"money","savi"));
console.log(arr);


let arr1 = [2,3,4,5];
let arr2 = [2,3,4,5];
let arr3 = [2,3,4,5];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);