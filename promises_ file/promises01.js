// let promise=new Promise(function(resolve,reject){
//     alert("hii i am promise")
//    resolve(45)
// }) 

// console.log("hello world ")
// setTimeout(function(){
//     console.log("hello in 2 second")
// },2000)
// console.log("my name harry")
// console.log(promise)

// p=new Promise(function(resolve,reject){
//     console.log("promise is pending ")
//     setTimeout(function(){
//         //console.log("i am promise and i am fullfeild ")
//         resolve(true)
//        // reject(new Error("this is error"))
//     },5000)
// })












// p1=new Promise(function(resolve,reject){
//     console.log("promise is pending ")
//     setTimeout(function(){
//         //console.log("i am promise and i am rejected ")
//         //resolve(true)
//         reject(new Error("this is error"))
//     },5000)
// })
// console.log(p,p1)

// p.then((value)=>{
//     console.log("this is ",value)
// })
//or
// p.then((alert)=>{
//     console.log("this is ",alert)
// })


// p1.then((value)=>{
//     console.log("this is ",value)
// })

// p1.then((value)=>{
//        console.log("this is ",value)
//      },(error)=>{
//         console.log("this is error by then")
//      })

// p1.catch((error)=>{
//     console.log(error,"some error in p1 ")
// })
// //or
// p1.catch((error)=>{
//     console.log(error)
// })


// let p1=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("resolve in 2 second")
//     },2000)
//     resolve(56)
// })
// console.log(p1)
// p1.then((value)=>{
//     console.log(value)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise 2")
//         },2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("it is done ")
// })









// quize
const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve("script has been loaded")
        }
        script.onerror=()=>{
             reject("reject "+0)
        }
    })
}

let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.warn("true ",value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.warn("secon script is ready")
}).catch((error)=>{
console.log("sorry some error on loading script in ")
})
//code on promise function
// p1.then(()=>{
//    console.log("hii this is handlers")
// })
// p1.then(()=>{
//      console.log("hii this is handlers2")
//   })