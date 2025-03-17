const gd = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// event bubbling and event capture
// by default bubbling
// child.addEventListener("click",()=>{
//   console.log("child clicked");
// },false)
// parent.addEventListener("click",()=>{
//   console.log("parent clicked");
// },false)
// gd.addEventListener("click",()=>{
//   console.log("grandparent clicked");
// },false)
// agr true hota to capture hota

// event lister ke under tin properties hoti h
// addEventListener(first_event,callback,capture)

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );
// gd.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked");
//   },
//   true
// );

// how to r ecognize
child.addEventListener(
  "click",
  (event) => {
    // console.log("child clicked");
    console.log(event.target);
    // event.stopPropagation(); 
  },
  true
);
parent.addEventListener(
  "click",
  (event) => {
    // console.log("parent clicked");
    console.log(event.target);
  },
  false
);
gd.addEventListener(
  "click",
  (event) => {
    // console.log("grandparent clicked");
    console.log(event.target);
  },
  false
);
