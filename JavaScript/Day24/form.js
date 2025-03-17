const form = document.querySelector("form");
// form.addEventListener('click',(event)=>{
//     console.log(event.target);
// })

// focus event
// const form = document.querySelector('form');
// form.addEventListener('focus',(event)=>{
//     console.log(event.target);
// })

// const form = document.querySelector('form');
// form.addEventListener('focusin',(event)=>{
//     console.log(event.target);
// })

// const form = document.querySelector('form');
// form.addEventListener('focusout',(event)=>{
//     console.log(event.target);
// })

// const form = document.querySelector('form');
// form.addEventListener('click',(event)=>{
//     console.log("single click");
// })

// const form = document.querySelector('form');
// form.addEventListener('dblclick',(event)=>{
//     console.log("double click");
// })

// const form = document.querySelector('form');
// form.addEventListener('submit',(event)=>{
//     console.log("form submitted");
// })

// const form = document.querySelector('form');
// form.addEventListener('reset',(event)=>{
//     console.log("form reset");
// })

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const first = document.getElementById("first");
  //   console.log(first.value);

  //   const second = document.getElementById("second");
  //   console.log(second.value);

  //   const third = document.getElementById("third");
  //   console.log(third.value);
  // or we can use the below code

  const data = new FormData(form);
//   console.log(data);
for(let [key,value] of data.entries())
{
    console.log(key,value);
}
// console.log(Array.from(data.keys()));
// console.log(Array.from(data.values()));































  //   const result = document.getElementById("result");
  //   result.innerHTML = `${first.value} ${second.value} is a good girl`;

  //   document.body.append(result);
});
