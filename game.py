import random

comp=random.randint(1,3)
count=0
repeat=int(input("how mant time do you want to play"))
for i in range(1,repeat+1):
    user=input("play game to enter G OR S OR W \n")
    if comp==1:
       if user=='g':
           print("you win!")
           print("computer choose the snake")
           count=count+1
       elif user=='s':
           print("draw!")
           print("computer choose the snake")
       elif user=='w':
           print("you loose")
           print("computer choose the snake")
    elif comp==2:
        if user=='s':
            print("you win!")
            print("computer choose the water")
            count=count+1
        elif user=='w':
            print("draw!")
            print("computer choose the water")
        elif user=='g':
            print("you loose")
            print("computer choose the water")
    elif comp==3:
        if user=='w':
            print("you win!")
            print("computer choose the gun") 
            count=count+1
        elif user=='g':
            print("draw!")
            print("computer choose the gun") 
        elif user=='s':
            print("you loose")
            print("computer choose the gun") 
    else:
      print("not valid input") 
print("your score is ",count)                    

