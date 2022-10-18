const boxEl = document.querySelectorAll(".box")

window.addEventListener("scroll" , scrollAnimation)

scrollAnimation();

function scrollAnimation(){
    const windowBottom = window.innerHeight / 5 * 4
    boxEl.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < windowBottom){
            box.classList.add("side")
        }else{
            box.classList.remove("side")
        }
    })
}