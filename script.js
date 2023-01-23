let theme=document.getElementById("theme")
theme.addEventListener("click",()=>{
  //document.body.style.background="black";
  if(theme.innerHTML=="Turn-off"){
  document.body.style.background="black";
  theme.innerHTML="Turn-on"
  }
  else if(theme.innerHTML=="Turn-on"){
    document.body.style.background="white";
    theme.innerHTML="Turn-off"
    }
  
})

let add1=document.getElementById("gbtn1")
let add2=document.getElementById("gbtn2")
let add3=document.getElementById("gbtn3")
let add4=document.getElementById("gbtn4")
let add5=document.getElementById("gbtn5")
let add6=document.getElementById("gbtn6")

let alphabet=["snake","water","gun"]
let score=""
  
add1.addEventListener("click",function(){
    let randamchar=alphabet[Math.floor(Math.random()*alphabet.length)]

    if(randamchar=="snake"){
         if(add1.innerHTML=="snake"){
            //alert("game draw  computer choosen the snake")
            add4.innerHTML="match draw! computer choosen snake"
        }
    }
    if(randamchar=="water"){
        if(add1.innerHTML=="snake"){
            //alert("you win computer choosen the snake")
            add4.innerHTML="you win !"
        } 
    }
    if(randamchar=="gun"){
        if(add1.innerHTML=="snake"){
            //alert("game draw  computer choosen the snake")
            add4.innerHTML="you loose! computer choosen gun"
        } 
    }
})

add2.addEventListener("click",function(){
    let randamchar=alphabet[Math.floor(Math.random()*alphabet.length)]

    if(randamchar=="snake"){ 
        if(add2.innerHTML=="water"){
            //alert("game draw  computer choosen the snake")
            add4.innerHTML="you loose! computer choosen snake"
        } 
    }
    if(randamchar=="water"){
         if(add2.innerHTML=="water"){
            //alert("game draw  computer choosen the snake")
            add4.innerHTML="match draw! computer choosen water"
        }
    }
    if(randamchar=="gun"){
        if(add2.innerHTML=="water"){
            //alert("you win computer choosen the snake")
            add4.innerHTML="you win !"
        } 
    }
})

add3.addEventListener("click",function(){
    let randamchar=alphabet[Math.floor(Math.random()*alphabet.length)]

    if(randamchar=="snake"){
        if(add3.innerHTML=="gun"){
            //alert("you win computer choosen the snake")
            add4.innerHTML="you win !"
        }  
    }
    if(randamchar=="water"){
         if(add3.innerHTML=="gun"){
            //alert("game draw  computer choosen the snake")
            add4.innerHTML="you loose! computer choosen water"
        } 
    }
    if(randamchar=="gun"){
       
         if(add3.innerHTML=="gun"){
            //alert("game draw  computer choosen the snake")
            add4.innerHTML="match draw! computer choosen gun"
        }
    }
})

add5.addEventListener("click",function(){
    add4.innerHTML=score;

})