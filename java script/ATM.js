amount=prompt("enter amount : ")
amount=Number.parseInt(amount)
function atm(amount){
    let rtrn=0
    if((amount>=2000) && (amount%2000==0 || amount%2000!=0)){
        if(amount%2000==0){
        a1=amount/2000
        rtrn=a1
        console.log(rtrn+"    note of 2000Rs")
       }
       else if(amount%2000!=0){
        b1=amount/2000
        b1=Number.parseInt(b1)
        a1=amount%2000
        rtrn=a1
        console.log(b1+"    note of 2000Rs")
      /// console.log(rtrn+"    save Rs")
        
       }
    }



    if((rtrn>=500)&&(rtrn%500==0 || rtrn%500!==0)){
        if(rtrn%500==0){
            a2=rtrn/500
            rtrn=a2
        console.log(a2+"    notes of 500Rs")
        }
        else if(rtrn%500!=0){
         b2=rtrn/500
         b2=Number.parseInt(b2)
         a2=rtrn%500
         rtrn=a2
         console.log(b2+"    notes of 500")
        // console.log(rtrn+"    save Rs")


        }
    }



    if((rtrn>=200)&& (rtrn%200==0 || rtrn%200!=0)){
        if(rtrn%200==0){
            a3=rtrn/200
            rtrn=a3
            console.log(a3+"    notes of 200Rs")
        }
        else if(rtrn%200!=0){
            b3=rtrn/200
            b3=Number.parseInt(b3)
            a3=rtrn%200
            rtrn=a3
            console.log(b3+"    notes of 200Rs")
            //console.log(rtrn+"    save rs")

        }
    }




    if((rtrn>=100)&&(rtrn%100==0 || rtrn%100!=0)){
        if(rtrn%100==0){
            a4=rtrn/100
            rtrn=a4
            console.log(a4+"    notes of 100Rs")
        }
        else if(rtrn%100!=0){
            b4=rtrn/100
            b4=Number.parseInt(b4)
            a4=rtrn%100
            rtrn=a4
            console.log(b4+"   notes of 100Rs")
            console.log(rtrn+"   save Rs")
        }
    }





    if((rtrn>=50)&&(rtrn%50==0 || rtrn%50!=0)){
        if(rtrn%50==0){
            a5=rtrn/50
            rtrn=a5
            console.log(a5+"    notes of 50Rs")
        }
        else if(rtrn%50!=0){
            b5=rtrn/50
            b5=Number.parseInt(b5)
            a5=rtrn%50
            rtrn=a5
            console.log(b5+"   notes of 50Rs")
           // console.log(rtrn+"   save Rs")
        }
    }




    if((rtrn>=20)&&(rtrn%20==0 || rtrn%20!=0)){
        if(rtrn%20==0){
            a6=rtrn/20
            rtrn=a6
            console.log(a6+"    notes of 20Rs")
        }
        else if(rtrn%20!=0){
            b6=rtrn/20
            b6=Number.parseInt(b6)
            a6=rtrn%20
            rtrn=a6
            console.log(b6+"   notes of 20Rs")
            //console.log(rtrn+"   save Rs")
        }
    }



    if((rtrn>=10)&&(rtrn%10==0 || rtrn%10!=0)){
        if(rtrn%10==0){
            a7=rtrn/10
            rtrn=a7
            console.log(a7+"    notes of 20Rs")
        }
        else if(rtrn%10!=0){
            b7=rtrn/10
            b7=Number.parseInt(b7)
            a7=rtrn%10
            rtrn=a7
            console.log(b7+"   notes of 10Rs")
            console.log(rtrn+"   save Rs")
        }
    }


    if(amount<=0){
        console.log("ha ha ha ha! enter a valid amount")
    }
}
atm(amount)
