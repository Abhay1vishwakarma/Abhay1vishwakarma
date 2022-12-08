# # class ClassRoom:
# #     formtype="attendence"
# #     def printData(self):
# #         print(f"Name is {self.Name}")
# #         print(f"Rolenum  is {self.RoleNum}")
# # Attendenceaplication=ClassRoom()
# # Attendenceaplication.Name="Abhay"  
# # Attendenceaplication.RoleNum="1"
# # Attendenceaplication.printData()




# class Employee:
#     company="google"   
#     salary=100000
# harry=Employee()
# print(harry.company ) 
# harry.company="microsoft"
# print(harry.company )
# harry.salary=1000000 
# print(harry.salary)

      
class Employee:
    company="google"
    def __init__(self):
        print("hii self code")
    def getsalary(self,hii):
        print(f"salary is 30k \n {hii}")
    @staticmethod    
    def greet():
        print("good morning")    
herry=Employee()
herry.getsalary("thanks")
herry.greet() 
         

