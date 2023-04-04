function play(){
    var audio=new Audio('./mymusic.mp3')
   audio.play()
    }
 //play()


 let t = document.getElementById("btn")
    
    let setbtn = document.getElementById("set")
   

    setInterval(function () {
      let a = new Date()
      let h = a.getHours()
      let m = a.getMinutes()
      let s = a.getSeconds()
      let ms = a.getMilliseconds()


      // console.log(h+m+s)
      t.innerHTML = (h + ':' + m + ':' + s + ':' + ms)
    }, 10)

   
    // play()
    setbtn.addEventListener('click',ring)


    function ring(hourinput,secondinput) {
        var hourinput = document.getElementById("hour").value
    var secondinput = document.getElementById("seconds").value
      setTimeout(() => {
        play()
       
      },(hourinput*60000)+(secondinput*1000));
    }



