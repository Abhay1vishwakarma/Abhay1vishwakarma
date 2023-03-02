# n=int(input("enter number: "))
# copy=n
# arm=0
# while(n>0):
#     r=n%10
#     arm=(r*r*r)+arm
#     n=n//10
# print(arm) 
# if(copy==arm):
#     print("armstrong number")
# else:
#     print("not armstrong number")            
    
    
a=int(input("enter number: "))
fact=1
i=1
while i<=a:
    fact=fact*i    
    i+=1
print(fact)      
    