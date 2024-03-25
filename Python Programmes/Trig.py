import math
def exp(x):
    s,t,n=0,1,1
    while(t!=0):
        s=s+t
        t=t*x/n
        n=n+1
    return s

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

n=int(input('Enter a number: '))
x=n*(math.pi)/180
print('The sin value of {} is {}.'.format(n,sin(x)))
print('The cos value of {} is {}.'.format(n,cos(x)))
print('The tan value of {} is {}.'.format(n,tan(x)))