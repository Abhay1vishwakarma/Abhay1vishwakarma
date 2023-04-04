async function hemant(){
    let delhiwheather=new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(" delhi:15 degree")
        },2000)
    })
    let banglore=new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("banglaru:14 degree")
        },5000)
    })

    // delhiwheather.then((x)=>{
    //     alert(x)
    // })
    // banglore.then((y)=>{
    //     alert(y)
    // })
    //or
    // delhiwheather.then(alert)
    // banglore.then(alert)
    //or
    console.log("fetching delhi weather.....")
    let delhiw=await delhiwheather
    console.log("fetched delhi weather: "+delhiw)
    console.log("fetching banglore weather.....")
    let banglaruw=await banglore
    console.log("fetched banglore weather: "+banglaruw)

    return [delhiw,banglaruw]
}
let a=hemant()
a.then((value)=>{
    console.log(value)
})