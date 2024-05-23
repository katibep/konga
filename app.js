const form=document.querySelector(".form")
const menu=document.querySelector("#menu")
const exi=document.querySelector("#exi")
console.log(menu,form)
exi.style.display="none"
menu.addEventListener("click",function(){
    console.log("clicked")
    form.style.display="block"
    menu.style.display="none";
    exi.style.display="block"
})
exi.addEventListener("click",function(){
    console.log("clicked")
    form.style.display="none"
    menu.style.display="block";
    exi.style.display="none"
})
