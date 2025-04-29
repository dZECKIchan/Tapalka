let settings = document.getElementById("settings");
let shop = document.getElementById("shop");
let text_progress = document.getElementById("textprogress");
let monet = document.getElementById("monet");
let progress = document.getElementById("progress");

settings.addEventListener("click", (event) => {
    window.location.href = "setings.html"
})
shop.addEventListener("click", (event) => {
    window.location.href = "shopofskin.html"
})

let count

if (localStorage.getItem('count') == null){
    count = Number(localStorage.setItem('count', 0));
}
else {
    count = Number(localStorage.getItem('count'));
    monet.innerText = count;
    progress.style.width = `${count}%`;
    text_progress.innerText = `${count}/100`;
}

function addmonet(){
    if (count === 100){
        monet.innerText = 'НЕ ГАНЯЙТЕ ПАЦАНИ 😫😫😫'
    }
    else {
        count++;
        localStorage.setItem('count', count)
        text_progress.innerText = `${count}/100`;
        monet.innerText = count;
        progress.style.width = `${count}%`;
    }
}