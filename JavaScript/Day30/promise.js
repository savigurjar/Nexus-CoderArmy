// callbackhell solution
// async task
// weather
// const obj = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=2f9d642bb14b425387171813252001&q=London&aqi=yes"
// );
// console.log(obj);
// setTimeout(() => {
//   console.log(obj);
// }, 2000);

// obj.then((data) => {

// //   console.log(data);
//   console.log(data.json());
// }).catch((error)=>{
//     console.log(error);
// })
// pending resolve reject

// obj.then((response)=>{
//     const pro = response.json();

//     pro.then((data)=>{
//         console.log(data);
//     })
// })
// orr
// promise chaining
// obj.then((response)=>{
//     return  response.json();
// }). then((data)=>{
//     console.log(data);
// })

// or
// obj
// .then((response) => response.json()) //arrow fun me same only one ke liye return krne ki need nhi hoti
// .then((data) => console.log(data));
// or


fetch(
  "http://api.weatherapi.com/v1/current.json?key=2f9d642bb14b425387171813252001&q=London&aqi=yes"
)
  .then((response) => response.json()) //arrow fun me same only one ke liye return krne ki need nhi hoti
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); //catch ek bar hi  lgana h
