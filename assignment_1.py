# # 1st queation

# n=4
# print(" * "*7)
# for x in range(n):
#     print(" * " *(n-x-1),end=(""))
#     print("   " *(2*x+1),end=(""))
#     print(" * " *(n-x-1)) 




# # 2nd queation (we can compare any type of number)

# num1=float(input("enter first number : "))
# num2=float(input("enter second number : "))
# num3=float(input("enter third number : "))

# if num1>num2 and num1>num3:
#     print(num1, "is greater ")
# elif num2>num1 and num2>num3 :
#      print(num2," is greater")
# elif num3>num1 and num3>num2 :
#      print(num3," is greater") 


# #3rd question

# i=1
# while i<5:
#       alphabates=input("enter password: ")
#       n=alphabates.upper()
#       if n=="XATI":
#          break



# #4th question

# i=1
# numsum=[]
# print("for sum of number press 's' ")
# while i<5:
#       number=input("enter number: ") 
#       if number=='s':
#           break 
#       number=int(number)  
#       numsum.append(number)
# print("sum of number is : ",sum(numsum) )    



# #5th question

i=1
while i<5:
      n=input("For continue press any key or exit the program press 's': ")
      if n=='s':
         print("you exit to program")   
         break
      letter1=97
      while letter1<=122:
            j=97
            while j<=letter1:
                  print(chr(j),end=(" "))
                  j+=1
            print(" ")
            letter1+=1
      letter2=122
      while letter2>=97:
            k=97
            while k<=letter2:
                  print(chr(k),end=(" "))
                  k+=1
            print(" ") 
            letter2-=1     

