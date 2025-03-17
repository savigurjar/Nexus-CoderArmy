cart = ["pizza", "cock", "sandwich"];

function placeOrder(cart) {
  console.log("Talking with Domino's");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;
      if (food_available) {
        console.log("Order Placed Successfully");
        const order = {
          orderId: 221,
          food: cart,
          restaurant: "Dominos",
          location: "Dwarka",
        };
        resolve(order);
      } // Resolving the promise with 'order' object
      else {
        reject("Items out of stock");
      }
    }, 2000);
  });
  return pr;
}

function preparingOrder(order) {
  console.log("Pizza preparation started....");
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const oderA = true;
      if (oderA) {
        console.log("Pizza preparation Done");
        const foodDetails = {
          token: 12,
          restaurant: order.restaurant,
          location: order.location,
        };
        resolve(foodDetails);
      } else {
        reject("oder coudn't done sorry");
      }
    }, 5000);
  });
  return pr;
}

function pickupOrder(foodDetails) {
  console.log("Reaching restaurant for picking order");
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const prefood = true;
      if (prefood) {
        console.log("Order picked up by Delivery Boy");
        const droplocation = foodDetails.location;
        resolve(droplocation);
      } else {
        reject("food could not prepare");
      }
    }, 3000);
  });
  return pr;
}

function deliverOrder(droplocation) {
  console.log("Delivery boy on the way");

  setTimeout(() => {
    console.log("Order Delivered succesfully");
  }, 5000);
}

placeOrder(cart)
  .then((order) => preparingOrder(order))
  .then((foodDetails) => pickupOrder(foodDetails))
  .then((droplocation) => deliverOrder(droplocation))
  .then(() => console.log("Enjoy your pizza! 🍕"))
  .catch((error) => console.log(error));

// create promise
// const pr = new Promise(function(resolve,reject){

// })
// return pr;
