import string

# print(string.ascii_letters)
# print(string.ascii_lowercase)
# print(string.ascii_uppercase)
# print(string.digits)
# print(string.punctuation)
# print(string.Template)
# print(string.printable)

# sentence="i am  coder"
# print(sentence.title())


# for i in range(97,123):
#     print(chr(i),end=" ")



i=1
while i<5:
      n=input("for continue press any key or exit the program press 's' ")
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

            
