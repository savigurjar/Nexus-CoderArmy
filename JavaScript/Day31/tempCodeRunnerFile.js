async function greet() {
  const data = await p1;
  console.log(data);
  console.log("bye"); //it will also wait 5 second


  const data2 = await p2;
  console.log(data2); //it will not wait kyu ki promise is resolve
}
greet();