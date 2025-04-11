const icon = document.getElementById("setingsico");

icon.addEventListener("click", () => {
    icon.classList.add("animate-rotate");
  
    setTimeout(() => {
      window.location.href = "setings.html";
    }, 1200);
  });
  
  icon.addEventListener("animationend", () => {
    icon.classList.remove("animate-rotate");
  });
const icon2 = document.getElementById("setingsico2");

icon2.addEventListener("click", () => {
  icon2.classList.remove("animate-rotate2");
  void icon2.offsetWidth;
  icon2.classList.add("animate-rotate2");

  setTimeout(() => {
    window.location.href = "setings.html";
  }, 1200);
});
