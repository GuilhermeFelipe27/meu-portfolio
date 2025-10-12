const elemButtonLight = document.querySelector(".buttonLigth")
const elemButtonDark = document.querySelector(".buttonDark")

elemButtonLight.addEventListener("click", function(){
    document.body.classList.add("ligth")
})

elemButtonDark.addEventListener("click", function(){
    document.body.classList.remove("ligth")
})