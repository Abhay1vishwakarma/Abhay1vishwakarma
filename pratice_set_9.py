#1st question 
# with open("sample.txt",'r') as a:
#      f=a.read()
# if "twinklee" in f :
#     print("present")
# else:
#     print("not present") 


#2nd question
# def game():
#     return 65
# score=game()

# with open("highscore.txt",'r') as a:
#      b=int(a.read())
# if (score>b):
#   with open("highscore.txt",'w') as c:
#        d=c.write(str(score))
# else:
#     print(b)            


#3rd question
# for i in range(1,21):
#     with open(f"table{i}.txt",'w') as f:
#         for j in range(1,11):
#             f.write(f"{i}x{j}={i*j}")
#             if j!=10:
#                 f.write('\n')

#4th question
# with open("read.txt",'r') as a:
#      b=a.read()
#      with open("read.txt",'w') as d:
#             e=d.write(b.replace("donkey","####"))

#5th question
# words=["good","nice","excellent"]
# with open("read.txt",'r') as a:
#     content=a.read()
# for word in words:
#     content=content.replace(word,"!@#$%^&*()_+<>?|/.,\;;l")
# with open("read.txt",'w') as b:
#     b.write(content)  


#6th question
# content=True
# i=1
# with open("logfiles.txt",'r') as a:
#      while content:
#            content=a.readline()
#            if "python" in content.lower():
#               print(content)
#               print("yes python present in line ",i)
#            i+=1   



# #7th question
# with open("read.txt",'r') as a:
#     content=a.read()
# with open("copy.txt",'w') as f:
#      f.write(content)   


#8th question
file1="copy.txt"
file2="read.txt"
with open(file1) as f:
    f1=f.read()
with open(file2) as f:
    f2=f.read()
if(f1==f2):
    print("files are identical")
else:
    print("files are not identical")            

