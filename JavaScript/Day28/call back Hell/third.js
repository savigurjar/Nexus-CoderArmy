// java script is a single threaded synchronous language : ek hi task ek bar me execute hoga
// but 
// behaviour asynchronus bhi h

// lets take an example 
// console.log("10");
// console.log("20");
// console.log("30");
// it will line by line 10 20 30 execute 
// but now
console.log("10");
// set timeout is not part of js engine(web api ka part hota )
setTimeout(()=>{
    console.log("20");
},2000)
console.log("30");
// it will 10 30 20