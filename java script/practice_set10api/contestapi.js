let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    ihtml=""
    for (item in contest){
        console.log(contest[item])
        ihtml+=`
        <div class="card" style="width: 20rem;">
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text">status is ${contest[item].status}</p>
          <p>Start at :${contest[item].start_time}</p>
          <p>end at :${contest[item].end_time}</p>
          <a href="${contest[item].url}" class="btn btn-primary">contest here</a>
        </div>
      </div>
        `
    }
    cardcontainer.innerHTML=ihtml
})
