//let a=prompt("enter your city")
//let p=fetch(`https://goweather.herokuapp.com/weather/${a}`)
let p=fetch("https://goweather.herokuapp.com/weather/{city}")
p.then((reponse)=>{
    console.log(reponse.status)
    console.log(reponse.ok)
    console.log(reponse.headers)
    return reponse.json()
}).then((value2)=>{
       console.log(value2)
})