# 1st quesion

mystring="This is string in python"
repeat={}# this is dictionary

for i in mystring:
    if i in repeat:
        repeat[i]=repeat[i]+1
    else:
        repeat[i]=1
print("repeatuency is:", repeat)        
            

# 2nd question
mystring="This is string in python"
print(mystring.replace('T','y'))

# 3rd question
mystring="This is string in python"
print(mystring.replace(mystring[0],''))

# 4th question
mystring="This is string in python"
print("remove the all repeat character from string:\nand now string is: ")
for i in range(len(mystring)):
    a=mystring.count(mystring[i])
    if(a<2):
       print(mystring[i])  
        
        
    



   