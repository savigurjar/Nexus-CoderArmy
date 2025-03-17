let arr = [
  "apple",
  "violet",
  "tae",
  "apple",
  "violet",
  "tae",
  "apple",
  "violet",
  "tae",
  "v",
];
const res = arr.reduce(
  (acc, curr) => {
    if (acc.hasOwnProperty(curr)) acc[curr]++;
    else acc[curr] = 1;

    return acc;
  },
  { violet: 2, tae: 3, v: 2 }
);
console.log(res);
