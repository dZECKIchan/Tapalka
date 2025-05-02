let home = document.getElementById("home");
let settings = document.getElementById("settings");
let standart_button = Array.from(document.getElementsByClassName("standart-button"));
let money_button = Array.from(document.getElementsByClassName("money-button"));
let next = document.getElementById("next");
let vzad = document.getElementById("vzad");
let price = document.getElementById("price");
let buy_skin = document.getElementById("buyskin");
let error = document.createElement("h1");

home.addEventListener("click", () => {
    window.location.href = "index.html"
})
settings.addEventListener("click", () => {
    window.location.href = "setings.html"
})

if(localStorage.getItem('MoneySkinActive') === null){
    MoneySkinActive = Boolean(localStorage.setItem('MoneySkinActive', 'false'));
}

function buy(){
    if (MoneySkin == 'false'){
        if(Number(localStorage.getItem("count")) < 500){
            error.innerText = 'Невистачає коштів!'
            error.id = 'error'
            document.body.append(error)
        }
        else{
            localStorage.setItem("MoneySkin", 'true');
            let count = String(localStorage.getItem("count") - 500);
            localStorage.setItem("count", count);
            buy_skin.onclick = choose_money_skin;
            buy_skin.innerText = `Вибрати`
        }
    }
}



let MoneySkinActive = localStorage.getItem("MoneySkinActive");
let MoneySkin = localStorage.getItem("MoneySkin");

function nextskin(){

    function backskin(){
        vzad.style.color = "#404240";
        vzad.onclick = null;
        next.style.color = "#06971e";
        next.onclick = nextskin;
        standart_button.forEach(element => {
            element.style.display = "block";
        })
        money_button.forEach(element => {
            element.style.display = "none";
        })
        price.innerText = "Стандартний скін"
        buy_skin.style.backgroundColor = "#404240";
        buy_skin.innerText = "Вибрати"
        if(localStorage.getItem("MoneySkinActive") == 'true'){
            buy_skin.style.backgroundColor = "#28a745";
            buy_skin.innerText = 'Вибрати'
            buy_skin.onclick = choose_standart_skin;
        }
        error.remove()
    }

    standart_button.forEach(element => {
        element.style.display = "none";
    })
    money_button.forEach(element => {
        element.style.display = "block";
    })
    vzad.style.color = "#06971e";
    next.style.color = "#404240";
    next.onclick = null;
    vzad.onclick = backskin;
    price.innerText = "$500"
    buy_skin.style.backgroundColor = "#28a745";
    buy_skin.innerText = "Купити"
    buy_skin.onclick = buy;
    if(localStorage.getItem("MoneySkinActive") == 'true'){
        buy_skin.style.backgroundColor = "#404240";
        buy_skin.innerText = 'Вибрати'
        buy_skin.onclick = null;
    }
    if(MoneySkin == 'true'){
        buy_skin.onclick = choose_money_skin;
        buy_skin.innerText = `Вибрати`
    }
}

//IF STATEMENTS

function choose_money_skin(){
    localStorage.setItem("MoneySkinActive", 'true')
    buy_skin.style.backgroundColor = "#404240";
    buy_skin.innerText = 'Вибрати'
}
function choose_standart_skin(){
    localStorage.setItem("MoneySkinActive", 'false')
    buy_skin.style.backgroundColor = "#404240";
    buy_skin.innerText = 'Вибрати'

}
if(MoneySkinActive == 'true'){
    buy_skin.style.backgroundColor = "#28a745";
    buy_skin.innerText = 'Вибрати'
    buy_skin.onclick = choose_standart_skin;
}
