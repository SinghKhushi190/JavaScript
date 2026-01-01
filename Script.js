console.log("hello world");

let a = document.querySelector(".container")
console.log(a)
document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".box").innerText 
document.querySelector(".container").outerHTML 
document.querySelector(".container").tagName
"DIV"
document.querySelector(".container").nodeName 
document.querySelector(".container").textContent

document.querySelector(".container").hidden
false
document.querySelector(".container").hidden = true 
document.querySelector(".box").hasAttribute("style")
true
document.querySelector(".box").getAttribute("style")
"display: flex;"
document.querySelector(".box").setAttribute("style","display: inline")
undefined
document.querySelector(".box").attributes

document.querySelector(".box").removeAttribute("style")  

let cont = document.querySelector(".container")

cont.insertAdjacentHTML("afterend","I <b>am under the water. Please help me here too much rainging.... iuuuuooo</b>")

document.querySelector(".container").classList
DOMTokenList [ "container" ]

document.querySelector(".container").className

document.querySelector(".container").classList.add("KHUSHI")
undefined
document.querySelector(".container").classList.remove("KHUSHI")

document.querySelector(".container").classList.toggle("box")
true
document.querySelector(".container").classList.toggle("box")
false
document.querySelector(".container").classList.toggle("box") 

true
document.querySelector(".container").classList.replace("box","box1")  

let button = document.getElementById("btn")

button.addEventListener("click",()=> {
    console.log("you have clicked the button")
})