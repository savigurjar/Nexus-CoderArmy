/*const red = document.getElementById("red");
const blue = document.getElementById("blue");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const purple = document.getElementById("purple");

const body = document.body;
// or document.querySelector("body");
red.addEventListener("click",()=>{
   body.style.backgroundColor = "red";
})
blue.addEventListener("click",()=>{
   body.style.backgroundColor = "blue";
})
orange.addEventListener("click",()=>{
   body.style.backgroundColor = "orange";
})
green.addEventListener("click",()=>{
   body.style.backgroundColor = "green";
})
purple.addEventListener("click",()=>{
   body.style.backgroundColor = "purple";
})*/

// otimize code
// const btn = document.querySelectorAll("button");
// const body = document.body;
// // btn.forEach((btn) => {
// //   btn.addEventListener("click", () => {
// //     body.style.backgroundColor = btn.id;
// //   });
// // });
// // or
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", () => {
//     body.style.backgroundColor = btn[i].id;
//   });
// }

// or bubbling
// event deligation
const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON")
    document.body.style.backgroundColor = event.target.id;
});

