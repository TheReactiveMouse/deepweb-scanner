import random
import os
import requests
countofsites = input("Sites count:")
count = 0
while (count != int(countofsites) ):
    number1 = random.randint(111, 255)
    number2 = random.randint(111, 255)
    number3 = random.randint(111, 255)
    number4 = random.randint(111, 255)
    print(f"Testing : http://{number1}.{number2}.{number3}.{number4}/")
    try:
        if requests.get(f"http://{number1}.{number2}.{number3}.{number4}/").status_code == 200:
            print(f"Site found! - IP : http://{number1}.{number2}.{number3}.{number4}")
            count += 1
        else:
            print(f"Failed - IP : http://{number1}.{number2}.{number3}.{number4}")
    except Exception as error:
        print(f"Failed - IP : http://{number1}.{number2}.{number3}.{number4}")

os.system('pause')