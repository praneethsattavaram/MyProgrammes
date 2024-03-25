import math
def sum(a,b):
    sum=a+b
    return sum

def diff(a,b):
    diff=a-b
    return diff

def mul(a,b):
    mul=a*b
    return mul

def div(a,b):
    div=a/b
    return div

def exp(x):
    s,t,n=0,1,1
    while(t!=0):
        s=s+t
        t=t*x/n
        n=n+1
    return s

def log(y):
    x=(y-1)/(y+1)
    t,n,s=x,1,0
    while(t/n!=0):
        s=s+t/n
        t=t*x*x
        n=n+2
    return 2*s

def sin(x):
    a=exp(x*1j)
    b=exp(x*-1j)
    c=(a-b)/2
    return c.imag

def cos(x):
    d=exp(x*1j)
    e=exp(x*-1j)
    f=(d+e)/2
    return f.real

def tan(x):
    g=sin(x)/cos(x)
    return g

print('To perform ADDITION ENTER 1')
print('To perform SUBRACTION ENTER 2')
print('To perform MULTIPLICATION ENTER 3')
print('To perform DIVISION ENTER 4')
print('To perform EXP ENTER 5')
print('To perform LOG ENTER 6')
print('To perform COMPLEX ENTER 7')
print('To perform TRIGONOMETRY ENTER 8')
n=int(input('Enter any value n'))
if n==1:
    n1=int(input('Enter the value of a: '))
    n2=int(input('Enter the value of b: '))
    print('The sum of the values {} and {} is {}.'.format(n1,n2,sum(n1,n2)))

elif n==2:
    n1 = int(input('Enter the value of a: '))
    n2 = int(input('Enter the value of b: '))
    print('The difference of the values {} and {} is {}.'.format(n1,n2,diff(n1,n2)))

elif n==3:
    n1 = int(input('Enter the value of a: '))
    n2 = int(input('Enter the value of b: '))
    print('The product of the values {} and {} is {}.'.format(n1,n2,mul(n1,n2)))

elif n==4:
    n1 = int(input('Enter the value of a: '))
    n2 = int(input('Enter the value of b: '))
    print('The division of the values {} and {} is {}.'.format(n1,n2,div(n1,n2)))

elif n==5:
    x=int(input('Enter the value of x: '))
    print('The exponential value of {} is {}.'.format(x,exp(x)))

elif n==6:
    y=int(input('Enter the value of y: '))
    print('The logarthamic value of {} is {}.'.format(y,log(y)))

elif n==8:
    n=int(input('Enter a number: '))
    x=n*(math.pi)/180
    print('The sin value of {} is {}.'.format(n,sin(x)))
    print('The cos value of {} is {}.'.format(n,cos(x)))
    print('The tan value of {} is {}.'.format(n,tan(x)))

elif n==7:
    n1=complex(input('Enter first complex number: '))
    n2=complex(input('Enter second complex number: '))
    sum=n1+n2
    print('The sum of the complex numbers {} and {} is {}.'.format(n1,n2,sum))
    product=n1*n2
    print('The product of {} and {} is {}.'.format(n1,n2,product))
    print('The real part of the product is',product.real)
    print('The imaginary part of the product is',product.imag)

else:
    print('Enter a valid INPUT')
