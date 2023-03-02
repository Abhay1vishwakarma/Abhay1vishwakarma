let addinpt = document.getElementById("inpt");
let add = document.getElementById("add_btn");
let storage = localStorage.getItem("localtask");
if (storage == null) {
  taskobj = [];
} else {
  taskobj = JSON.parse(storage);
}

add.addEventListener("click", () => {
  addinptval = addinpt.value;
  // let storage=localStorage.getItem("localtask")
  // if(storage==null){
  //     taskobj=[]
  // }
  // else{
  //     taskobj=JSON.parse(storage)
  //  }
  taskobj.push(addinptval);
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtodo();
});
function showtodo() {
  // let storage=localStorage.getItem("localtask")
  // if(storage==null){
  //     taskobj=[]
  // }
  // else{
  //     taskobj=JSON.parse(storage)
  // }
  let html = "";
  let box = document.getElementById("container");
  taskobj.forEach((item, index) => {
    html += ` 
    <div class="fullbox">
        <div id="box">
        <h4>${index + 1}. </h4>
           <p>${item} </p>
       </div>
       <div class="btns">
           <button id="edit"  onclick="edititem(this)">edit</button>
           <button id="delete" onclick="removeitem(this)">delete</button>
     </div>
     </div>  `;
  });
  box.innerHTML = html;
}
showtodo();

function removeitem(current) {
  current.parentElement.parentElement.remove();
  //    let storage=localStorage.getItem("localtask")
  //    if(storage==null){
  //        taskobj=[]
  //    }
  //    else{
  //        taskobj=JSON.parse(storage)
  //    }
  document.location.reload();
  let dltitem =
    current.parentElement.previousElementSibling.children[0].innerHTML;
  console.log(dltitem);

  //   Array.form(taskobj)
  let dltitem1 = dltitem - 1;
  console.log(dltitem1);
  //taskobj.JSON.parse(storage)
  //delete taskobj[dltitem1];
  taskobj.splice(dltitem1, 1);
  localStorage.setItem("localtask", JSON.stringify(taskobj));

  console.log(typeof taskobj);
}
function edititem(edit1) {
  if (edit1.textContent == "edit") {
    let currentedit=edit1.parentElement.previousElementSibling.children[1]
    edit1.textContent = "done";
    console.log(currentedit)
      let currinput=document.createElement('input')
      currinput.type="text"
      currinput.value=currentedit.innerHTML
      
      currentedit.parentElement.replaceChild(currinput,edit1.parentElement.previousElementSibling.children[1]);
  }
  else if(edit1.textContent=="done"){
    edit1.textContent = "edit";
    let currinput=document.createElement('input')
      currinput.type="text"
    let currentedit=edit1.parentElement.previousElementSibling.children[1]
      currinput.value=currentedit.innerHTML
            currentedit.parentElement.replaceChild(currentedit,currinput);

  }
}
