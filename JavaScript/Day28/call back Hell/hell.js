// function fetchuser() {
//   console.log("fetching the user detail......");
//   setTimeout(() => {
//     console.log("data fetched succesfully");
//     // data fetched from backend
//     // greet("tae");
//     meet("tae");
//   }, 2000);
// }
// function greet(name) {
//   console.log(`hello ${name}`);
// }
// function meet(name)
// {
//     console.log(`hello ${name}, i'll meet you in japan`);
// }
// fetchuser();

// function fetchUser(callBack) {
//   console.log("Fetching the user details...");

//   setTimeout(() => {
//     console.log("Data fetched successfully");

//     // Data fetched from backend
//     callBack("tae");
//   }, 2000);
// }

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function meet(name) {
//   console.log(`Hello ${name}, I'll meet you in Japan`);
// }

// // Fetch user details and call the greet function
// //   fetchUser(greet);
// fetchUser(meet);

/*
function fetchUser(callBack1, callBack2) {
    console.log("Fetching the user details...");
  
    setTimeout(() => {
      console.log("Data fetched successfully");
  
      // Data fetched from backend
      let userName = "tae";
      
      callBack1(userName);
      callBack2(userName);
    }, 2000);
  }
  
  function greet(name) {
    console.log(`Hello ${name}`);
  }
  
  function meet(name) {
    console.log(`Hello ${name}, I'll meet you in Japan`);
  }
  
  // Fetch user details and call both greet and meet functions
  fetchUser(greet, meet);
  */

function greet(obj) {
  console.log(`Hello ${obj.name}`);
}

function meet(obj) {
  console.log(`Hello ${obj.name}, I'll meet you in Japan`);
}
function fetchdata(callBack) {
  console.log("fetched info of user");

  setTimeout(() => {
    console.log("fetch detail success");
    const obj = {
      name: "tae",
      age: 29,
      city: "tokyo",
    };
    callBack(obj);
  }, 2000);
}
fetchdata(greet);
