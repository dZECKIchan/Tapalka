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
//---------------------------------------------------------------
let moneyskin = document.getElementsByClassName("money-button");
let standartbutton = document.getElementsByClassName("standart-button");
let price = document.getElementById('price');
let vzad = document.getElementById("vzad");
let next = document.getElementById("next");
let buyskin = document.getElementById("buyskin");
let thisskin = 0;
let eror = document.createElement('h1')

function buyskinfunc(){
    if(localStorage.getItem('count') < 500){
        eror.innerText = 'Невистачає коштів'
        eror.id = 'erorid'
        document.body.appendChild(eror)
    }
}

function vzadskin(){
    if(thisskin === 1){
        next.style.display = 'block'
        for(let el2 of moneyskin){
            el2.style.display = 'none';
        }
        for(let el1 of standartbutton){
            price.innerText = 'Стандартний скін'
            buyskin.innerText = 'Вибрати'

            el1.style.display = 'block';
            vzad.onclick = null;
            vzad.style.color = '#404240';
            next.onclick = nextskin;
            next.style.color = '#06971e';
            buyskin.style.backgroundColor = '#404240'
            if(eror){
                eror.remove()
            }
            thisskin--;
        }
    }
}
function nextskin(){
    for(let el2 of moneyskin){
        el2.style.display = 'block';
    }
    for(let el1 of standartbutton){
        el1.style.display = 'none';
        next.onclick = null;
        buyskin.style.backgroundColor = 'rgb(6, 151, 30)'
        buyskin.innerText = 'Купити'
        next.style.color = '#404240';
        vzad.style.color = '#06971e';
        buyskin.onclick = buyskinfunc;
        thisskin++;
    }
    price.innerText = 'Ціна 500$'
    vzad.onclick = vzadskin;
    console.log(thisskin)
}
