# include <stdio.h>

int factorial(int n)
{
    int p,t;
    for(p=1,t=1;t<=n;t++)
        p=p*t;
    return p;
}

int main()
{
    int a,b,c,d;
    printf("Enter the value of a: ");
    scanf("%d",&a);
    printf("Enter the value of b: ");
    scanf("%d",&b);
    printf("Enter the value of c: ");
    scanf("%d",&c);
    printf("Enter the value of d: ");
    scanf("%d",&d);
    printf("The values of %d!, %d!, %d! and %d! are %d, %d, %d and %d.",a,b,c,d,factorial(a),factorial(b),factorial(c),factorial(d));
    return 0;
}
