const elem = document.querySelectorAll(".elem");

elem.forEach((val) => {
  val.addEventListener("mouseenter", (e) => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", (e) => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (e) => {
    val.childNodes[3].style.left = e.x + "px";
    val.childNodes[3].style.top = e.y + "px";
  });
});
