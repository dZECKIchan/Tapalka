let home = document.getElementById("home");
let settings = document.getElementById("settings");
let standart_button = Array.from(document.getElementsByClassName("standart-button"));
let money_button = Array.from(document.getElementsByClassName("money-button"));
let next = document.getElementById("next");
let vzad = document.getElementById("vzad");
let price = document.getElementById("price");
let buy_skin = document.getElementById("buyskin");
let error = document.createElement("h1");
let buy_level = document.getElementsByClassName('buylevel');
let error_div = document.getElementsByClassName(`error_div`);

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
            error_div[0].append(error);
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



//ПРОКАЧКА

let error2 = document.createElement("h1");
let svg = document.getElementById('svg')
let salary_for_one_click = document.getElementById("salary_for_one_click");
let price_of_click = document.getElementById("price_of_click");

salary_for_one_click.innerText = `Доход за 1 клік: $${localStorage.getItem("salary_for_one_click")}`;


function buy_level_up_for_salary_2(){
    if(Number(localStorage.getItem("count")) < 800){
        error2.id = 'error2'
        error2.innerText = 'Невистачає коштів!'
        error_div[1].append(error2);
    }
    else{
        localStorage.setItem("salary_for_one_click", 3);
        price_of_click.innerText = `Макс.`;
        let newCounter2 = Number(localStorage.getItem("count")) - 800;
        localStorage.setItem('count', newCounter2)
        salary_for_one_click.innerText = `Доход за 1 клік: $${localStorage.getItem('salary_for_one_click')}`;
        i.onclick = null;
        i.style.backgroundColor = "#404240";
    }
}


function buy_level_up_for_salary(){
    if(Number(localStorage.getItem("count")) < 250){
        error2.id = 'error2'
        error2.innerText = 'Невистачає коштів!'
        error_div[1].append(error2);
    }
    else {
        localStorage.setItem("salary_for_one_click", 2);
        price_of_click.innerText = '$800';
        let newCounter = Number(localStorage.getItem("count")) - 250;
        localStorage.setItem('count', newCounter)
        salary_for_one_click.innerText = `Доход за 1 клік: $${localStorage.getItem('salary_for_one_click')}`;
    }
}
for(var i of buy_level){
    if(localStorage.getItem('salary_for_one_click') == '2'){
        i.onclick = buy_level_up_for_salary_2;
    }
    if(localStorage.getItem('salary_for_one_click') == '1'){
        i.onclick = buy_level_up_for_salary;
    }
    if(localStorage.getItem('salary_for_one_click') == '3'){
        i.onclick = null;
        i.style.backgroundColor = "#404240";
    }
}
if(localStorage.getItem("salary_for_one_click") == '2'){
    price_of_click.innerText = `$800`;
    i.onclick = buy_level_up_for_salary_2;
}
if(localStorage.getItem("salary_for_one_click") == '3'){
    price_of_click.innerText = `Макс.`;
    i.onclick = null;
}
