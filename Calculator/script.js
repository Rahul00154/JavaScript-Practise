const input = document.getElementById("input");
const button = document.querySelectorAll("button");

button.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    console.log(e.target.textContent);

    if (e.target.textContent === "c") {
      input.innerText = "";
    } else if (e.target.textContent === "<") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (e.target.textContent === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += e.target.textContent;
    }
    input.scrollLeft = input.scrollWidth;
  });
});
