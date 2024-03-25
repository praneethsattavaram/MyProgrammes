# include <stdio.h>

int fibonacci (int n)
{
    int a,b,c,t;
    for(a=0,b=1,c=1;c<n;c++)
    {
        t=b;
        b=a+b;
        a=t;
    }
    return b;
}

int main()
{
    int n;
    printf("Enter the value of n: ");
    scanf("%d",&n);
    printf("The fibonacci value of %d is %d.",n,fibonacci(n));
    return 0;
}
