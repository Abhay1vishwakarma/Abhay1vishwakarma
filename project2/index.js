let box=document.getElementById("crlh1")
let boximg=box.style.backgroundImage="url('./imgs/img4.jpg')"
setInterval(()=>{
if(boximg==(box.style.backgroundImage="url('./imgs/img4.jpg')")){
    boximg=box.style.backgroundImage="url('./imgs/img3.jpg')"
}
else if(boximg==(box.style.backgroundImage="url('./imgs/img3.jpg')")){
    boximg=box.style.backgroundImage="url('./imgs/img2.jpg')"
}
else if(boximg==(box.style.backgroundImage="url('./imgs/img2.jpg')")){
    boximg=box.style.backgroundImage="url('./imgs/img1.jpg')"
}
else if(boximg==(box.style.backgroundImage="url('./imgs/img1.jpg')")){
   boximg= box.style.backgroundImage="url('./imgs/img4.jpg')"
}
},2000)

let navbtn=document.getElementById("burger")
let navulbtn=document.querySelector(".navul")
let listitem=document.querySelector(".listitems")
let navlist=document.querySelectorAll(".navli")
console.log(navlist)


navbtn.addEventListener('click',()=>{
  
    listitem.classList.toggle("alldlt");
})




