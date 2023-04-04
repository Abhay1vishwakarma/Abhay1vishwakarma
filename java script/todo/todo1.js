submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let titlec=title.value
    let descc=desc.value 
    
    localStorage.setItem("todo",JSON.stringify[titlec,descc])
    console.log(e)
    todo.innerHTML=`
    <h1>${titlec}</h1>
    <h2>${descc}</h2>
    
    `
    title.value=""
    desc.value=""
    })
    
    deletebtn.addEventListener("click",(e)=>{
        e.preventDefault()
        localStorage.removeItem("todo")
        todo.innerHTML=""
        })