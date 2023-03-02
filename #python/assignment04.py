##question 1
# str1='this is string in the python and this is asiignment'
# print('your string is:-\n'+str1)
# user=input("enter a pair string: ")
# print('count= ',str1.count(user))


#question 2
# str1=input('enter your string: \n')
# i=len(str1)-1
# while i>=0:
#       print(str1[i],end=(""))
#       i-=1

      
      
#question 3
# str1=input('enter string pattern: \n')
# str2=input('enter string pattern: \n')
# if(str2 in str1):
#     print(str2)
#     print('length is ',len(str2))
# elif(str1 in str2):
#     print(str1)
#     print('length is ',len(str1)) 
# else:
#     print('no matching')  
    
#question 4
str1='this is string and this is asiignment'
substr={}
for i in str1:
    if i in substr:
        substr[i]=substr[i]+1
    else:
        substr[i]=1         
print(substr)
print("i is the most comman largest sub squence") 
          

         
      

                