def froudprogram():
    i=1
    while i<=12:
          month=input("Enter your month name: ")
          num1=int(input("enter percentage of bank transfer: "))
          num2=int(input("enter percentage of groceries: "))
          num3=int(input("enter percentage of food: "))
          num4=int(input("enter percentage of bill: "))
          if(num1>33)and(num1>37):
                print( month,"is month of froud\n ")
          elif(num2>33)and(num2>37):
                print(month,"is month of froud \n")  
          elif(num3>17)and(num3>21):
                print(month,"is month of froud \n") 
          elif(num4>17)and(num4>21):
                print(month,"is month of froud\n ")  
          else:
              print("this is not month of froud \n") 
          i+=1    
a=froudprogram()  
print(a)             
                            
          

