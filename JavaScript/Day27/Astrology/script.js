//based on month
const zodiacSigns = (day, month) => {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
}
// 31 size
//based on date
const compliments = [
  "You have a great sense of humor!",
  "Your kindness is contagious!",
  "You light up the room!",
  "You're an amazing friend!",
  "You have an incredible smile!",
  "You're so thoughtful!",
  "You have a fantastic work ethic!",
  "You're a great listener!",
  "Your positivity is inspiring!",
  "You have a beautiful soul!",
  "You're incredibly talented!",
  "You make the world a better place!",
  "You're full of brilliant ideas!",
  "You're strong and resilient!",
  "You bring out the best in people!",
  "Your creativity is amazing!",
  "You're such a genuine person!",
  "You're always so helpful!",
  "Your laugh is infectious!",
  "You have a great perspective on life!",
  "You radiate confidence!",
  "You're a great problem solver!",
  "You have a big heart!",
  "You're always so supportive!",
  "You're an inspiration!",
  "You make people feel valued!",
  "You're a breath of fresh air!",
  "You handle challenges gracefully!",
  "You're wise beyond your years!",
  "You're simply awesome!",
  "You make a difference in the world!",
];
// 20size
const victimCardCompliments = [
  "You always give your best, but people rarely notice.",
  "You're too kind, and sometimes people take advantage of it.",
  "You always put others first, but they don't do the same for you.",
  "Your heart is pure, but the world doesn't appreciate it.",
  "You help everyone, but no one helps you when you need it.",
  "You forgive too easily, and people take it for granted.",
  "You're always there for others, but they disappear when you need them.",
  "You work hard, but others get the credit.",
  "You're too honest, and people misunderstand you.",
  "You trust people, but they often break it.",
  "You give love unconditionally, but don’t always receive it.",
  "You always support others, but no one supports you.",
  "You stay loyal, but others don’t value it.",
  "You always do the right thing, even when it’s hard.",
  "You never ask for anything in return, but deserve so much more.",
  "You always stay strong for others, but no one asks if you’re okay.",
  "You bring happiness to others, but feel alone inside.",
  "You always help, but people forget your kindness.",
  "You understand everyone, but no one tries to understand you.",
  "You deserve better than what life gives you.",
];
// 30 size
const selfImprovementTips = [
  "Understand others' feelings when they are silent.",
  "Feed a street dog or any stray animal.",
  "Listen more than you speak in conversations.",
  "Practice gratitude daily.",
  "Help someone without expecting anything in return.",
  "Compliment someone genuinely today.",
  "Spend time with elderly people and listen to their stories.",
  "Reduce screen time and connect with nature.",
  "Apologize when you're wrong and mean it.",
  "Support a friend's dreams and goals.",
  "Donate to a cause, even if it's a small amount.",
  "Say thank you to people who serve you, like waiters or cashiers.",
  "Be patient with people having a hard time.",
  "Make someone smile today.",
  "Learn a new skill that benefits others.",
  "Volunteer for a local charity or community event.",
  "Be kind to yourself and practice self-care.",
  "Read a book that expands your understanding of others.",
  "Encourage someone who's struggling.",
  "Forgive someone even if they haven't apologized.",
  "Reduce waste and be more eco-friendly.",
  "Spend time with your family without distractions.",
  "Write a heartfelt letter to someone who matters to you.",
  "Be open-minded to different perspectives.",
  "Celebrate other people's success genuinely.",
  "Be honest, but always with kindness.",
  "Surprise someone with a small act of kindness.",
  "Stop complaining and focus on solutions.",
  "Smile more—it’s contagious!",
  "Remember, everyone is fighting a battle you can't see.",
];
// size 30
const futurePredictions = [
  "You will learn an important lesson the hard way.",
  "Someone you trust will surprise you soon.",
  "Your hard work will pay off, but not in the way you expect.",
  "You will face a difficult choice that changes your path.",
  "A new opportunity will come, but it will require sacrifice.",
  "You will meet someone who challenges your views.",
  "A situation will test your patience in unexpected ways.",
  "You will realize that not everyone deserves your kindness.",
  "An old friend will come back into your life.",
  "You will have to make peace with a past mistake.",
  "A sudden event will push you out of your comfort zone.",
  "You will discover something about yourself that you never noticed before.",
  "Your plans will change, but for a reason you’ll understand later.",
  "You will have to stand up for yourself in a tough situation.",
  "A difficult period will make you stronger than ever.",
  "You will finally let go of something that has been holding you back.",
  "A risk you take will bring unexpected results.",
  "You will realize that some things are better left unsaid.",
  "You will receive advice that seems small but changes everything.",
  "Something you've been waiting for will take longer than expected.",
  "You will be tested, but you will come out wiser.",
  "An unexpected turn will lead you to where you need to be.",
  "You will break free from a habit that no longer serves you.",
  "Your patience will be rewarded in an unusual way.",
  "You will have to choose between comfort and growth.",
  "A delayed plan will turn out to be a blessing in disguise.",
  "You will find clarity in a situation that once confused you.",
  "A small decision will have a big impact on your future.",
  "You will realize that not all endings are bad.",
  "You will get something you wanted, but it won’t feel like you expected.",
];

// step 2
const form = document.getElementById("astroForm");
form.addEventListener("submit", (event) => {
  // refresh na ho jaye
  event.preventDefault();
  // console.log("submitted");

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  // console.log(name,surname);

  // number me convert
  const day = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);
  // console.log(day,month,year);

  const result = document.getElementById("result");
  // result.innerText = "yo!!";
  const first_message = `Hello ${name} ${surname}`;

  const zodiacsign = zodiacSigns(day, month);
  const second_message = `Your Zodiac sign is ${zodiacsign} `;
  const third_message = compliments[(day - 1) % compliments.length];


  let index = Math.floor(Math.random() * victimCardCompliments.length);
  const fourth_message = victimCardCompliments[index];

  // fixed 0-30 ke bich me
  index = (name.length * surname.length * year) % selfImprovementTips.length;
  const fifth_message = selfImprovementTips[index];

  index = (day * month * year) % futurePredictions.length;
  const sixth_message = futurePredictions[index];

  result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message}  Our recommendation for you : ${fifth_message} Your Future Prediction is : ${sixth_message}`;
});




// quize update:timer : automatic submit ho jaye























// function getZodiac() {
//     let date = parseInt(document.getElementById("date").value);
//     let month = parseInt(document.getElementById("month").value);
//     let name = document.getElementById("name").value;
//     let surname = document.getElementById("surname").value;
//     let zodiac = "";

//     if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) zodiac = "Aries";
//     else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) zodiac = "Taurus";
//     else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) zodiac = "Gemini";
//     else if ((month == 6 && date >= 21) || (month == 7 && date <= 22)) zodiac = "Cancer";
//     else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) zodiac = "Leo";
//     else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) zodiac = "Virgo";
//     else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) zodiac = "Libra";
//     else if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) zodiac = "Scorpio";
//     else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) zodiac = "Sagittarius";
//     else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) zodiac = "Capricorn";
//     else if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) zodiac = "Aquarius";
//     else if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) zodiac = "Pisces";
//     else zodiac = "Invalid Date";

//     document.getElementById("result").innerHTML = `<strong>${name} ${surname}</strong>, your zodiac sign is <strong>${zodiac}</strong>.`;
// }
