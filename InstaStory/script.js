let img = [
  {
    dp: "https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    story:
      "https://images.unsplash.com/photo-1574539602047-548bf9557352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    dp: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    story:
      "https://images.unsplash.com/photo-1534854726678-d5f734974efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1623114861327-1a1a00f2b53f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:
      "https://images.unsplash.com/photo-1529946179074-87642f6204d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1575186083127-03641b958f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxob3QlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    story:
      "https://images.unsplash.com/photo-1531469535976-c6fc3604014f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxob3QlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

let filler = "";

img.forEach((elem, idx) => {
  filler += `<div class="story">
        <img id = ${idx}
          src="${elem.dp}"
          alt="">
      </div>`;
});

const story = document.querySelector("#storian");

story.innerHTML = filler;

// let fullScreen = document.querySelector("#full-screen");
const fullScreen = document.querySelector("#full-screen");
story.addEventListener("click", (e) => {
  fullScreen.style.display = "block";
  // img[e.target.id].story;
  // img[e.target.id].story;
  fullScreen.style.backgroundImage = `url(${img[e.target.id].story}
  )`;

  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 2000);
});
