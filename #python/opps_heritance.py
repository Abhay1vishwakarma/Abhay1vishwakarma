# class Employee:
#     compay='google'
#     def showdetails(self):
#         print("this is employee")
# class Programmer(Employee):
#     language='python'
#     def getlanguage(self):
#         print("this is employee ")
#     def showdetails(self):
#         print('this is programmer')
# e=Employee()
# p=Programmer()   
# p.showdetails() 
# p.getlanguage()        





class Employee:
    compay='google'
    def showdetails(self):
        print("this is employee")
class Programmer:
    language='python'
    def getlanguage(self):
        print("this is employee ")
    def showdetails(self):
        print('this is programmer')
class Freelancer(Employee,Programmer):
    name='rohit'
    
            
e=Employee()
p=Programmer()
f=Freelancer() 
f.getlanguage()  
p.showdetails() 
p.getlanguage()        