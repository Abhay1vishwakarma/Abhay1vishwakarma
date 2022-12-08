# # 1st queation
# class Programmer:
#     company="microsoft"
#     def __init__(self,name,product):
#         self.name=name
#         self.product=product
#     def getinfo(self):
#         print(f"name:{self.name},product:{self.product}")
# a=Programmer("abhay","microsoft")
# a.getinfo()

# # 2nd queation
# class Calculator:
#     def __init__(self,num):
#         self.num=num
#         print("thank you ")
#     def square(self):
#         print(f"the square of {self.num} is {self.num**2}")
#     def squareroot(self):
#         print(f"the squareroot of {self.num} is {self.num**0.5}")
#     def qube(self):
#         print(f"the qube of {self.num} is {self.num**3}") 
     
# a=Calculator(3)
# a.square()
# a.qube()
# a.squareroot()    

# 3rd question
class Sample:
    a="vicky"
obj=Sample()
obj.a="hemant"
print(Sample.a)# class atribute will not change
print(obj.a)               
           
# 4th question
class Calculator:
    def __init__(self,num):
        self.num=num
        print("thank you ")
    def square(self):
        print(f"the square of {self.num} is {self.num**2}")
    def squareroot(self):
        print(f"the squareroot of {self.num} is {self.num**0.5}")
    def qube(self):
        print(f"the qube of {self.num} is {self.num**3}")
    @staticmethod     
    def greet():
        print("welcome to our calculator")
            
     
a=Calculator(3)
a.square()
a.qube()
a.squareroot()  
a.greet()  

# 5th question
class Train:
    def __init__(self,name,fare,seats):
        self.name=name
        self.fare=fare
        self.seats=seats
    def get_info(self):
        print(f"name:{self.name}")
        print(f"seats:{self.seats}")
        print(f"ticket is :{self.fare}")
intercity=Train("rajdhani express",90,576)
intercity.get_info()            
        
               
        