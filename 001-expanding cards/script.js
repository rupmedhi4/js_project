let penels = document.querySelectorAll(".panel")

console.log(penels);

penels.forEach((panel)=>{
    panel.addEventListener("click", ()=>{
        console.log(panel);
        removeActiveClass()
        panel.classList.add("active")
    })
})

const removeActiveClass = ()=>{
    penels.forEach((penel)=>{
        penel.classList.remove("active")
    })
}