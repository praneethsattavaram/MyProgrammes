lower=int(input("enter the lower range"))
upper=int(input("enter the upper range"))
for num in range(lower,upper+1):
    sum=0
    temp=num
    while num>0:
        digit=temp%10
        sum=sum+(digit*digit*digit)
        temp=temp//10
    if num==sum:
        print(num)
        