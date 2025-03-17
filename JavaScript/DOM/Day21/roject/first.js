const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Believe you can, and you're halfway there. – Theodore Roosevelt",
  "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "Happiness depends upon ourselves. – Aristotle",
  "A journey of a thousand miles begins with a single step. – Lao Tzu",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Dream big and dare to fail. – Norman Vaughan",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Push yourself, because no one else is going to do it for you. – Unknown",
  "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
  "Act as if what you do makes a difference. It does. – William James",
  "Work hard in silence, let success make the noise. – Frank Ocean",
  "Opportunities don’t happen. You create them. – Chris Grosser",
  "If you want to achieve greatness, stop asking for permission. – Unknown",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
  "Success doesn’t come from what you do occasionally. It comes from what you do consistently. – Marie Forleo",
];

const color = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
// console.log(quotes);

function generateQuote() {
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random() * quotes.length);
  const index1 = Math.floor(Math.random() * color.length);
  text.textContent = quotes[index];
  text.style.color = color[index1];
 
}

setInterval(generateQuote, 3000);


const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Change color every 5 seconds
setInterval(changeBackgroundColor, 2000);

