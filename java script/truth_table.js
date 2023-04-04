let a = [0, 0, 1, 1];
let b = [0, 1, 0, 1];
let ans10 = a[0] * b[0];
let ans11 = a[1] * b[1];
let ans12 = a[2] * b[2];
let ans13 = a[3] * b[3];
let ans20 = a[0] + b[0];
let ans21 = a[1] + b[1];
let ans22 = a[2] + b[2];
let ans23 = a[3] + b[3];
let ask=prompt("enter your ques")
console.log("a.b");
console.log(ans10);
console.log(ans11);
console.log(ans12);
console.log(ans13);
let and=[ans10,ans11,ans12,ans13]
console.log("");
console.log("a+b");

if (ans20 > 0) {
  ans20=1
} else {
    ans20=0
}
if (ans21 > 0) {
   ans21=1
} else {
  ans21=0
}
if (ans22 > 0) {
  ans22=1
} else {
  ans22=0
}
if (ans23 > 0) {
  ans23=1
} else {
  ans23=0
}
console.log(ans20);
console.log(ans21);
console.log(ans22);
console.log(ans23);
let or=[ans20,ans21,ans22,ans23]
console.log(and)
console.log(or)
let andnot=[]
for(let i=0;i<4;i++){
if(a[i]==0){
    andnot.push(1)
}
else if(a[i]==1){
    andnot.push(0)
}
}
console.log("and not ",andnot)

let ornot=[]
for(let i=0;i<4;i++){
if(b[i]==0){
    ornot.push(1)
}
else if(b[i]==1){
    ornot.push(0)
}
}
console.log("or not ",ornot)

