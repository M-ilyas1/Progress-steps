const progress = document.getElementById("progress")
console.log(progress)
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circule = document.querySelectorAll(".circule")

let currentAction = 1

next.addEventListener("click", () =>{
    currentAction++

    if(currentAction > circule.length){
    currentAction = circule.length 

    }

    update()
})

prev.addEventListener("click", () =>{
    currentAction--;

    if(currentAction < 1){
        currentAction = 1
    }

    update()   
})

function update(){
    circule.forEach((circule, idx) =>{
        if(idx < currentAction){
            circule.classList.add("active")
        }else{
            circule.classList.remove("active")

        }

    })

    const actives = document.querySelectorAll(".active")

    progress.style.widows = (actives.length - 1) / (circule.length - 1) * 100 +"%";

    if(currentAction === 1){
        prev.disabled = true
    }else if (currentAction === circule.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}