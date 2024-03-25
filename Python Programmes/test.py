n=int(input('Enter the number of numbers you want to enter: '))
print('Now enter the numbers')
data=[]
for i in range of (0,n):
    Data.append(int(input()))
    print('The summation of the entered numbers is {}.'format(sum(Data)))
    print('The average of the entered values is {}.'format(avg(data)))
    print('The standard deviation of the given numbers is {}.' foramt(std.dev(data)))
    print('The maximum among the entered numbers is {}.'format(maximum(data)))
    print('The minimum among the entered values is {].'format(minimum(data)))

def sum(data):
    n=len(data)
    sum=0
    for i in range(0,n):
        sum=sum+data[i]
        return sum

def avg(data):
    return sum(data)/len(data)

def std.dev(data):
    n=len(data)
    sum=0
    avg=avg(data)
    for i in range(0,n):
        sum=(data[i]-avg)**2
    var=sum/n
    return var**0.5

def max(data):
    n=len(data)
    max=data[0]
    for i in range(0,n):
        if max<data[i]
            max=data[i]
        return max

def min(data)
    n=len(data)
    min=data[0]
    for i in range(0,n):
        if min>data[i]
            min=data[i]
        return min