let btn = document.getElementById("btn")
// mouse events
// click
// double click
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey
button.addEventListener("click",()=> {
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b>Enjoy your clicked!"
        
 
})

button.addEventListener("Contextmenu",()=> {
   alert("Don't hack us by Right click Please")
})

button.addEventListener("keydown",(e)=> {
    console.log(e.key,)
})


