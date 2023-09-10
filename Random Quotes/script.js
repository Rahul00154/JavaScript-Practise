const button = document.getElementById("btn");
const output = document.querySelector(".output");

let quotes = [
  "Get Ready To Conquer Because You Are The Best",
  "Knowledge Is Not Free, Pay Attentiion",
  "INVEST IN YOUR DREAMS GRIND NOW, SHINE LATER !",
  "Every skill you acquire doubles your odds of success.",
  "Never Expect Anything from anyone",
  "Keep struggle better Days are coming",
  "Tomorrow will be better",
  "Focus on proving YourSelf,Not proving Yourself",
  "Patience is a big strenght.",
];

button.addEventListener("click", () => {
  console.log("clicked");
  let random = Math.floor(Math.random() * quotes.length);
  output.textContent = quotes[random];
});
