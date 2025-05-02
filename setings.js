let home = document.getElementById("home");
let shop = document.getElementById("shop");

home.addEventListener("click", () => {
    window.location.href = "index.html"
})
shop.addEventListener("click", () => {
    window.location.href = "shopofskin.html"
})

let delete_progress = document.getElementById("saveprogress");

function savesetings() {
    if(delete_progress.checked){
        let delete_progress_choise = window.confirm('Ви впевнені що хочете скинути прогрес?')
        if(delete_progress_choise){
            window.alert("Прогрес успішно скинутий!")
            localStorage.setItem('count', 0)
            localStorage.setItem("MoneySkin", false)
        }
    }
    window.location.href = "index.html"
}
