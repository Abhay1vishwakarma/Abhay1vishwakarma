let slides=document.querySelectorAll(".slide")
var counter=0;
slides.forEach((slide,index)=>{
slide.style.left=`${index*100}%`
})
let back=()=>{
    counter++
    slideimg()
}
let next=()=>{
    counter--
    slideimg()
}
let slideimg=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(${counter*100}%)`
    })
}
