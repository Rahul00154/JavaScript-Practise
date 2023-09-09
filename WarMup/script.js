const rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  const rectangleLoc = rect.getBoundingClientRect();
  const insideRect = details.clientX - rectangleLoc.left;
  if (insideRect < rectangleLoc.width / 2) {
    const redColor = gsap.utils.mapRange(
      0,
      rectangleLoc.width / 2,
      255,
      0,
      insideRect
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
    });
  } else {
    const blueColor = gsap.utils.mapRange(
      rectangleLoc.width / 2,
      rectangleLoc.width,
      0,
      255,
      insideRect
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
