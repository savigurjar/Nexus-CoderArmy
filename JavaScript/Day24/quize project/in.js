// const orignal_answer = [
//   "Sachin Tendulkar",
//   "West Indies",
//   "Sachin Tendulkar",
//   "264",
//   "Muttiah Muralitharan",
// ];
const orignal_answer = {
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan"
}
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const answer = Array.from(data.values());

  let result = 0;
  for (let [key,value] of data.entries()) {
    if (value == orignal_answer[key]) {
      result++;
    }
  }
//   for (let i = 0; i < answer.length; i++) {
//     if (answer[i] == orignal_answer[i]) {
//       result++;
//     }
//   }

  document.getElementById("out");
  out.innerText = `${result} out of 5 is correct`;

//   document.getElementById("container").append(out);
});
