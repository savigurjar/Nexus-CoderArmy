// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("hello onepiece");
//   }, 8000);
// });
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("onepiece");
//   }, 5000);
// });

// // p1.then(response => console.log(response));
// // p2.then(response => console.log(response));

// // or optimize
// async function greet() {
//   const data = await p1;
//   console.log(data);
// //   console.log("bye"); //it will also wait 5 second

//   const data2 = await p2;
//   console.log(data2); //it will not wait kyu ki promise is resolve
// }
// greet();

// in the function it will wait 5 second and other one also
function test1() {
  const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hello onepiece");
    }, 8000);
  });
  return p1;
}
function test2() {
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("onepiece");
    }, 5000);
  });
  return p2;
}
// async function greet() {
//   console.log("hello i greet you");
//   const data1 = await test1();
//   console.log(data1);

//   const data2 = await test2();
//   console.log(data2);
// }
// greet();
// console.log("hello coder army");

// when we create async function it will always return promise
// async function meet()
// {
//     return "tae"; //esko promise me convert kr dega
//     //if i don't write anything it will return undefined
// }
// meet().then(value => console.log(value));

// in parallel execute with in function ,max=8sec >5sec
async function greet() {
  try {
    console.log("hello i greet you");
    const [data1, data2] = await Promise.all([test1(), test2()]);
    console.log(data1);

    console.log(data2);
  } catch (error) {
    console.log(error);
  }
}
greet();
