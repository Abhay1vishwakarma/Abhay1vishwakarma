user=int(input("enter number: "))
lis=[]
a=user
r=user
i=0
r=r%2
lis.append(r)
while i<user:
    a=a//2
    if(a==1):
      lis.append(1)
      break
    r=a%2
    lis.append(r)
    i=-1
#print(lis)
lis.reverse()
print("binary number is = ",lis)       