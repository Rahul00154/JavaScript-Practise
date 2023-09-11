const stats = document.querySelector("h5");
let btn = document.querySelector("#add");

let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    stats.innerHTML = "Friends";
    stats.style.color = "green";
    btn.innerHTML = "Remove Friends";
    check = 1;
  } else {
    stats.innerHTML = "Stranger";
    stats.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
