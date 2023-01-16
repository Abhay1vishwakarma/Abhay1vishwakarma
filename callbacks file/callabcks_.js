
function loadScripti(src,callback){
        var script=document.createElement("script")
            script.src=src
            script.onload=function(){
                console.log("loaded script is "+src)
                callback(null,src);
                
            }
            // script.onerror=function(){
            //     console.log("error handling ",src)
            //     callback(new Error("src got some error "+src))
            // }
            document.body.appendChild(script)  
        }
        function hello( error,src){
            if(error){
                console.log(error)
                return
            }
            alert("hello world "+src)
        }
           loadScripti("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)

            