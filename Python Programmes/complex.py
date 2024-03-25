n1=complex(input('Enter first complex number: '))
n2=complex(input('Enter second complex number: '))
sum=n1+n2
print('The sum of the complex numbers {} and {} is {}.'.format(n1,n2,sum))
product=n1*n2
print('The product of {} and {} is {}.'.format(n1,n2,product))
print('The real part of the product is',product.real)
print('The imaginary part of the product is',product.imag)