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
    window.location.href = "shopofskin.html";
  }, 1200);
});
const icon3 = document.getElementById("setingsico3");
if(icon3){
    icon3.addEventListener("click", () => {
        icon3.classList.remove("animate-rotate2");
        void icon3.offsetWidth;
        icon3.classList.add("animate-rotate2");
      
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1200);
      });
}
//MAIN FUNC

let count = localStorage.getItem('count');
let countstorage;
let procent = localStorage.getItem('procent');
let procentstorage;
let progressbarmain = document.getElementById("progressbarmain");
let progress = document.getElementById("progress");
let textprogress = document.getElementById("textprogress");
let monet = document.getElementById("monet");
let saveprogress = document.getElementById("saveprogress")
monet.innerText = localStorage.getItem('count')
progress.style.width = `${localStorage.getItem('procent')}%`;
textprogress.innerText = `${count}/100`;

function addmonet(){
    if(count >= 100){
        monet.innerText = 'еееее, куда розогнався, я там щи не зробив'
    }
    else{
        count++;
        countstorage = localStorage.setItem('count', count.toString());
        monet.innerText = localStorage.getItem('count');
        textprogress.innerText = `${count}/100`;
        procent++;
        procentstorage = localStorage.setItem('procent', procent.toString());
        progress.style.width = `${localStorage.getItem('procent')}%`;
    }
}

function savesetings(){
    if(saveprogress){
        if(saveprogress.checked){
            let resetprogress = confirm(`Ви справді хочете скинути весь прогрес?`)
            if(resetprogress){
              localStorage.setItem("count", "0");
              localStorage.setItem("procent", "0");
              alert('Прогрес успішно скинутий!')
              window.location.href = "index.html"
            }
          else{
              window.location.href = "index.html"
            }
            
        }
  }
}
