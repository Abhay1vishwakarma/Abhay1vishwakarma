# import random



# a=random.uniform(0,255)
# user=input("enter 'r' for ip address: ")
# if user=='r':
#     print(a)
# else:
#     print("enter 'r' for ip address")    



# from random import randint


# def generate_random_ip():
#     return '.'.join(
#         str(randint(0, 255)) for _ in range(4)
#     )









from faker import Faker  #pip install Faker

abhay = Faker() # make a object
i=1
while i<100:
    user=input("enter 'r' for ip address: ")

    if user=='r':
     ip__address = abhay.ipv4() #ipv4 is function    
     print(ip__address) 
     break
    else:
        print("None")

# ip_address = fake.ipv4_public()
# print(ip_address)  # 👉️ 54.45.106.198

# ip_address = fake.ipv4_private()
# print(ip_address)  # 👉️ 10.103.230.160

# ip_address = fake.ipv6()
# print(ip_address)  # 👉️ 120b:ecc2:fe2f:1db1:d79c:99e1:a960:3221
