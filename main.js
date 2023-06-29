let menu_open=document.querySelector(".icon-menu-ico")
let menu_close=document.querySelector(".icon-menu-close")
let menu=document.querySelector(".menu_container")

menu_open.addEventListener("click",()=>{
    menu.classList.toggle("mostrar")
    menu_open.classList.add("ocultar")
    menu_close.classList.add("ver")
})

menu_close.addEventListener("click",()=>{
    menu_open.classList.remove("ocultar")
    menu_close.classList.remove("ver")
    menu.classList.toggle("mostrar")
})

let width=window.innerWidth
console.log(width)

if(width<705){
    document.querySelector(".backgroud").src="./images/image-web-3-mobile.jpg"
}