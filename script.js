let settings = document.getElementById("settings");
let shop = document.getElementById("shop");
let text_progress = document.getElementById("textprogress");
let monet = document.getElementById("monet");
let progress = document.getElementById("progress");
let level = document.getElementById("level");
const audio_of_level_up = new Audio('levelUp.wav'); audio_of_level_up.volume = 0.7;
let modal_window = document.getElementById("modal_window");
let main_btn = document.getElementById("mainbtn");

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
    count++;
    if(count === 100 || count === 1000){
        audio_of_level_up.play()
    }
    if (count === 1000){
        modal_window.className = 'animate_window';
        modal_window.style.display = 'block';
        setTimeout(() => {
            modal_window.className = 'animate_window_reverse'
        }, 4000)
    }
    if (count >= 100) {
        localStorage.setItem('count', count)
        text_progress.innerText = `${count}/1000`;
        monet.innerText = count;
        progress.style.width = `${count / 10}%`;
        level.innerText = '2 Уровень'
    }
    if (count > 1000){
        count++;
        localStorage.setItem('count', count)
        text_progress.innerText = `${count}/5000`;
        monet.innerText = count;
        progress.style.width = `${count / 50}%`;
        level.innerText = '3 Уровень'
    }
    if (count < 100) {
        localStorage.setItem('count', count)
        text_progress.innerText = `${count}/100`;
        monet.innerText = count;
        progress.style.width = `${count}%`;
    }
    if(count >= 5000){
        modal_window.innerText = 'Ліміт!'
        modal_window.className = 'animate_window';
        modal_window.style.display = 'block';
        setTimeout(() => {
            modal_window.className = 'animate_window_reverse'
        }, 6000)
        main_btn.onclick = null;
    }
}

//IF-STATEMENTS-----------------------------
if (count <= 100) {
    text_progress.innerText = `${count}/100`;
    progress.style.width = `${count}%`;
}
if (count >= 100 && count < 1000) {
    text_progress.innerText = `${count}/1000`;
    progress.style.width = `${count / 10}%`;
}
if (count >= 1000 && count < 5000) {
    text_progress.innerText = `${count}/5000u`;
    progress.style.width = `${count / 50}%`;
}