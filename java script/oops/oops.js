// let a={
//     name:"abhay",
//     language:"java script"

// }
// console.log(a)
// let p={
//     run:()=>{// run is method
//    alert("this is oops")
//     }
// }
// p.__proto__={
//     friend:"hemant"
// }
// a.__proto__=p
// a.run()
// console.log(a.friend)
// class Railwayform{
//     constructor(){
//         console.log("constructer called")
//     }
//     Submit(){
//         alert(this.name+" submited train number "+this.trainnum)
//     }
//     cancel(){
//         alert(this.name+" canceled train number "+this.trainnum)
//     }
//     fill(givenname,trainnumber){
//         //alert(name+" has submited")
//         this.name=givenname
//         this.trainnum=trainnumber
//     }
// }
// rohan= new Railwayform()
// harry= new Railwayform()
// //harry.fill("harry",146745)
// //rohan.fill("rohan",798798)
// rohan.Submit()
// harry.Submit()
// rohan.cancel()






// class Railwayform{
//     constructor(givenname,trainnum,address){
//         console.log("constructer called   "+givenname+" "+trainnum)
//         this.name=givenname
//         this.trainnum=trainnum
//         this.address=address

//     }
//     preveive(){
//         alert(this.name+" your form has submited and address is "+this.address+" train number is "+this.trainnum)
//     }
//     Submit(){
//         console.log(this.name+" submited train number "+this.trainnum+" and "+this.address)
//     }
//     cancel(){
//         console.log(this.name+" canceled train number "+this.trainnum+" and "+this.address)
//     }
//     // fill(givenname,trainnumber){
//     //     //alert(name+" has submited")
//     //     this.name=givenname
//     //     this.trainnum=trainnumber
//     // }
// }
// let rohan= new Railwayform("rohan",347863487,"delhi")
// let harry= new Railwayform("harry",993848973,"uttar pradesh")
// harry.preveive()
// rohan.preveive()

// //harry.fill("harry",146745)
// //rohan.fill("rohan",798798)
// rohan.Submit()
// harry.Submit()
// rohan.cancel()






class Animal{
    constructor(name,color){
        this.name=name
        this.color=color

    }
    run(){
        console.log(this.name+" is running ")
    }
    shout(){
        console.log(this.name+" is barking ")
    }
}


class Monkey extends Animal{
    eatbanana(){
        console.log(this.name +" is eating banana ")
    }
}

let ani=new Animal("monkey","broun")
let m=new Monkey("cow","white")

ani.shout()
m.eatbanana()
m.shout()



