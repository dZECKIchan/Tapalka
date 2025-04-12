let moneyskin = document.getElementsByClassName("money-button");
let standartbutton = document.getElementsByClassName("standart-button");
let price = document.getElementById('price');
let vzad = document.getElementById("vzad");
let next = document.getElementById("next");
let thisskin = 0;
function vzadskin(){
    if(thisskin === 1){
        next.style.display = 'block'
        for(let el2 of moneyskin){
            el2.style.display = 'none';
        }
        for(let el1 of standartbutton){
            price.innerText = 'Стандартний скін'
            el1.style.display = 'block';
            vzad.style.display = 'none';
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
        next.style.display = 'none'
        vzad.style.display = '';
        thisskin++;
    }
    price.innerText = 'Ціна 500$'
    vzad.onclick = vzadskin;
    console.log(thisskin)
}
