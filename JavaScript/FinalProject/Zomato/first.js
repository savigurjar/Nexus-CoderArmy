/*const restaurant = [];
const images = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "seven",
  "eight",
  "nine",
  "ten",
];
const rest_name = [
  "Sunny Feast",
  "Baratie Bites",
  "Red-Haired Tavern",
  "All Blue Kitchen",
  "Gomu Gomu Grill",
  "Luffy’s Meat Paradise",
  "Zoro’s Sushi Den",
  "Sanji’s Gourmet Haven",
  "Grand Line Diner",
  "Devil Fruit Delights",
  "Straw Hat Café",
  "Merry Go Meals",
  "Yonko’s Feast",
  "East Blue Eatery",
  "Raftel Resto",
  "Gear 5 Gastro",
  "Treasure Island Bistro",
  "Pirate King's Banquet",
  "Wano Ramen House",
  "Sky Island Sweets",
];
const FoodsType = [
  "Sushi", // Vinegared rice with seafood
  "Ramen", // Noodles in flavorful broth
  "Tempura", // Battered and deep-fried seafood/veggies
  "Takoyaki", // Octopus-filled savory balls
  "Okonomiyaki", // Savory Japanese pancake
  "Onigiri", // Rice balls with fillings
  "Katsu Curry", // Fried pork cutlet with curry rice
  "Yakitori", // Grilled skewered chicken
  "Udon", // Thick wheat noodles in broth
  "Matcha Desserts", // Green tea-flavored sweets
];

const Locations = [
  "Foosha Village", // Luffy's hometown
  "Marineford", // Site of the great war
  "Dressrosa", // Doflamingo's kingdom
  "Skypiea", // The sky island
  "Wano Country", // The samurai land
  "Whole Cake Island", // Big Mom's territory
  "Impel Down", // The underwater prison
  "Water 7", // The city of shipwrights
  "Sabaody Archipelago", // Near the New World entrance
  "Raftel (Laughtale)", // The final island of the Grand Line
];

for (let i = 0; i < 100; i++) {
  const obj = {};
  //   1. images
  obj["image"] = images[Math.floor(Math.random() * 10)];

  //   2.  name
  obj["name"] = rest_name[Math.floor(Math.random() * 20)];

  //   3 rating
  obj["rating"] = [Math.floor(Math.random() * 5 + 1)]; //+1 because 0 nhi hoti rating and agr points me likhna h rating ko to tofixed() ka use kr skte h

  //   4. food type
  obj["food_type"] = FoodsType[Math.floor(Math.random() * 10)];

  //   5. price
  obj["Price_for_two"] = Math.floor[Math.random() * 2401 + 100]; //kyu ki mujhe 100 se 2500 rupees tk price dena h

  // 6 location
  obj["location"] = Locations[Math.floor(Math.random() * 10)];

  // 7. distance
  obj["Distance_from_Customer_house"] = (Math.random() * 10 + 1).toFixed(1);

  // 8.offers
  obj["offers"] = Math.floor(Math.random() * 30);

  // 9. alchol
  obj["alcohol"] = Math.random() > 0.7; // true false me answer dega 70% me alcohol serve mhi hoti

  // 10. open time
  obj["Restaurant_open_time"] = Math.floor(Math.random() * 24);

  // 11. close
  obj["Restaurant_close_time"] = obj["Restaurant_open_time"] + (12 % 24); //12 hour

  restaurant.push(obj);
}
console.log(restaurant);*/

const restaurant = [];
const images = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "seven",
  "eight",
  "nine",
  "ten",
];
const rest_name = [
  "Sunny Feast",
  "Baratie Bites",
  "Red-Haired Tavern",
  "All Blue Kitchen",
  "Gomu Gomu Grill",
  "Luffy’s Meat Paradise",
  "Zoro’s Sushi Den",
  "Sanji’s Gourmet Haven",
  "Grand Line Diner",
  "Devil Fruit Delights",
  "Straw Hat Café",
  "Merry Go Meals",
  "Yonko’s Feast",
  "East Blue Eatery",
  "Raftel Resto",
  "Gear 5 Gastro",
  "Treasure Island Bistro",
  "Pirate King's Banquet",
  "Wano Ramen House",
  "Sky Island Sweets",
];

const FoodsType = [
  "Sushi",
  "Ramen",
  "Tempura",
  "Takoyaki",
  "Okonomiyaki",
  "Onigiri",
  "Katsu Curry",
  "Yakitori",
  "Udon",
  "Matcha Desserts",
];

const Locations = [
  "Foosha Village",
  "Marineford",
  "Dressrosa",
  "Skypiea",
  "Wano Country",
  "Whole Cake Island",
  "Impel Down",
  "Water 7",
  "Sabaody Archipelago",
  "Raftel (Laughtale)",
];

for (let i = 0; i < 100; i++) {
  const obj = {};

  // 1. images
  obj["image"] = images[Math.floor(Math.random() * images.length)];

  // 2. name
  obj["name"] = rest_name[Math.floor(Math.random() * rest_name.length)];

  // 3. rating (1 to 5)
  obj["rating"] = Math.floor(Math.random() * 5 + 1);

  // 4. food type
  obj["food_type"] = FoodsType[Math.floor(Math.random() * FoodsType.length)];

  // 5. price (100 to 2500)
  obj["Price_for_two"] = Math.floor(Math.random() * 2401 + 100);

  // 6. location
  obj["location"] = Locations[Math.floor(Math.random() * Locations.length)];

  // 7. distance (1.0 to 10.0 km)
  obj["Distance_from_Customer_house"] = (Math.random() * 10 + 1).toFixed(1);

  // 8. offers (0% to 30% discount)
  obj["offers"] = Math.floor(Math.random() * 31);

  // 9. alcohol availability (70% do not serve alcohol)
  obj["alcohol"] = Math.random() > 0.7;

  // 10. open time (0 to 23 hours)
  obj["Restaurant_open_time"] = Math.floor(Math.random() * 24);

  // 11. close time (open time + 12, ensures 12-hour shifts)
  obj["Restaurant_close_time"] = (obj["Restaurant_open_time"] + 12) % 24;

  restaurant.push(obj);
}

// console.log(restaurant);

// array ko convert krna h json me
const jsonData = JSON.stringify(restaurant, null, 2);
// console.log(jsonData);

// If you're running this in Node.js, you can save it to a file:
const fs = require("fs");
fs.writeFileSync("restaurants.json", jsonData, "utf-8");
// console.log("JSON file saved!");
