# include <stdio.h>

int factorial (int n)
{
    int p,t;
    for(p=1,t=1;t<=n;t++)
        p=p*t;
    return p;
}

int main()
{
    int i,n,x;
    printf("Enter the number of factorials you want to calculate: ");
    scanf("%d",&x);
    printf("Now enter the values.\n");
    for(i=0;i<x;i++)
    {
        scanf("%d",&n);
        printf("The factorial value of %d! is %d.\n",n,factorial(n));
    }
    printf("Thank you for using my application.\n");
    printf("Have a nice day!\n");
    return 0;
}
