// call back hell
function placeoreder(callBack) {
  console.log("talking to dominos");

  setTimeout(() => {
    console.log("order placed succesfully");
    callBack();
  }, 2000);
}
// placeoreder();
function preparingOrder(callBack) {
  console.log("pizza preparation started...");
  setTimeout(() => {
    console.log("pizza preparation done");
    callBack();
  }, 3000);
}
// preparingOrder();
function pickupOrder(callBack) {
  console.log("reaching restaurant for picking order");
  setTimeout(() => {
    console.log("picked up the order by Delivery boy");
    callBack();
  }, 4000);
}
// pickupOrder();

function deliverOrder(callBack) {
  console.log("delivery boy on the way...");
  setTimeout(() => {
    console.log("order delivered successfully");
    callBack();
  }, 5000);
}
// deliverOrder();

// placeoreder(preparingOrder);
// or
placeoreder(() => {
  preparingOrder(() => {
    pickupOrder(() => {
      deliverOrder(() => {
        console.log("Enjoy your pizza! 🍕");
      });
    });
  });
});

// this is hard to debug 
// easy solution 

