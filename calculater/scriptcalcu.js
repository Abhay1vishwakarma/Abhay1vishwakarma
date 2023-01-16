let string="";
let button=document.querySelectorAll(".button");
Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string
            let a=setTimeout(function(){
                alert('thanks for useing calculater ')
            },2000)
            
        }
        else if(e.target.innerHTML=='C'){
            string=""
            document.querySelector('input').value=string
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
        }
    })
})

// setTimeout(function(){
//     alert('thanks for useing calculater ')
// },20000)
// setInterval(function(){
//     alert("setInterval")
// },5000)