#include<stdio.h>

int main()
{
    int n,a,m,i;
    printf("Enter the value: ");
    scanf("%d",&n);
    m=n/2;
    for(i=2;i<=m;i++)
    {
        if(m%i!=0)
            a=n*n+1;
    }
    printf("%d",a);
    return 0;
}
