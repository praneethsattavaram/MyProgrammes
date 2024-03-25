def max(data):
    l=len(data)
    max=data[0]
    for i in range (0,l):
        if max<data[i]:
            max=data[i]
    return max

n=int(input('Enter a number'))
data=[]
data.append(n)
while n!=1:
    if n%2==0:
        n=n/2
        data.append(n)
    else:
        n=3*n+1
        data.append(n)

print('The maximum value among the colletz series is {}.'.format(max(data)))
