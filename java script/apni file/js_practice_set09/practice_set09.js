// 1st question
// const loadscript=(src)=>{
//     return new Promise((resolve, reject) => {
//         let script=document.createElement("script")
//         script.src=src
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve("script has loaded")
    
//         }
//         script.onerror=()=>{
//             reject("some error")
//         }
//     })
// }
// let addscript= loadscript("https:a//cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
// addscript.then((value)=>{
//     alert("loaded you script "+value)
//     return addscript
// }) 
// addscript.catch((error)=>{
//     alert("some error "+error)
// })

//2nd question
// async function loadscript(src) {
//     let promis= new Promise((resolve, reject) => {
//         let script=document.createElement("script")
//         script.src=src
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve("loaded script: "+src)
//         }
//         script.onerror=()=>{
//             reject("some error: "+src)
//         }
//     })
// let loadsrc = await promis
// return [loadsrc] 
// }
// let a=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     alert(value)
//     console.log(value)
// })
// a.catch((error)=>{
//     alert(error)
// })


//3rd question
// async function errorhandling(){
//       let Promis=new Promise((resolve, reject) => {
//         console.log("please wait for minute")
//         setTimeout(()=>{
//             reject(new Error ("reject  error after 3 second "))
//         },3000)
//       })
//       console.log(new Date().getMilliseconds())
//       let awet=await Promis

//       return [awet]
// }
//  let a=errorhandling()
// // a.then((value)=>{
// //     console.log(value)
// // })
// a.catch((error)=>{
//     console.log(error)
//     //console.log(new Date())
//     console.log(new Date().getMilliseconds())


// })

//or

//let  p=()=>{
// async function p(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   reject(new Error("this is error"))
// },3000)
//   })
// }
// let a=async()=>{
//   try{
//     let c=await p()
//     console.log(c)
//   }
//   catch(err){
//     console.log("this error has handled")
//   }
// }
// a()


//4th question
async function p1(){
return new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(10)
  },2000)
})
}

async function p2(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(20)
    },3000)
  })
  }
  async function p3(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(30)
      },4000)
    })
    }
async function run(){
  console.time("run")
  let a1=await p1()
  let a2=await p2()
  let a3=await p3()
  //console.log(a1,a2,a3)
  let a1a2a3=await Promise.all([a1,a2,a3])
  console.log(a1a2a3)
  console.timeEnd("run")
}    
run()