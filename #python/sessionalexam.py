# num=int(input("enter number: "))
# i=1
# while i<=num:
#       def fib(i):
#           if(i==0):
#             return 0
#           if(i==1):
#              return 1
#           fib1=fib(i-1)
#           fib2=fib(i-2)
#           ans=fib1+fib2
#           return ans
#       print(fib(i))
#       i+=1    
def fib(n):
    a,b=0,1
    while a<n:
        print(a,end=(" "))
        a,b=b,a+b
    print(" ")
fib(100)        