const d = new Date();
console.log(d);
console.log(typeof d);
console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString()); 

const date1 = new Date();
const date2 = new Date("2025-01-21");
console.log(date2-date1);
console.log(date2>date1);
console.log(date2<date1);

// countdown for olympic
const d1 = new Date();
const d2 = new Date("2028-07-14T00:00:00");

const date = d2-d1;
const days = Math.floor(date/(1000*60*60*24));
const hour = Math.floor((date/(1000*60*60))%24);
const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);
console.log(`olympic countDownTime : ${days} hour:${hour} minute:${minute} second: ${second}`)