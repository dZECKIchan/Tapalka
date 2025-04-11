const icon = document.getElementById("setingsico");

icon.addEventListener("click", () => {
  icon.classList.remove("animate-rotate");
  void icon.offsetWidth;
  icon.classList.add("animate-rotate");

  setTimeout(() => {
    window.location.href = "setings.html";
  }, 1200);
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


