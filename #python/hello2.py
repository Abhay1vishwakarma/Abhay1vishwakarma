i=1
while i<=5:
      k=1
      while k<=5:
            if k==i or (i+k)==6 :
               print("*",end=(" "))   
            else: 
                 print(" ",end=(" "))    
            k+=1
      print(" ")
      i+=1         