let settings = document.getElementById("settings");
let shop = document.getElementById("shop");
let text_progress = document.getElementById("textprogress");
let monet = document.getElementById("monet");
let progress = document.getElementById("progress");
let level = document.getElementById("level");
const audio_of_level_up = new Audio('levelUp.wav'); audio_of_level_up.volume = 0.7;


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
    if (count >= 100){
        if(count == 100){
            audio_of_level_up.play()
        }
        count++;
        localStorage.setItem('count', count)
        text_progress.innerText = `${count}/1000`;
        monet.innerText = count;
        progress.style.width = `${count / 10}%`;
        level.innerText = '2 Уровень'
    }
    else {
        count++;
        localStorage.setItem('count', count)
        text_progress.innerText = `${count}/100`;
        monet.innerText = count;
        progress.style.width = `${count}%`;
    }
}