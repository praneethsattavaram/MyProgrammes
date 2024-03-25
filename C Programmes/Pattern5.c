#include<stdio.h>

int main()
{
    int a,i,j,k,t=0;
    printf("Enter the no of rows: ");
    scanf("%d",&a);
    for(i=1;i<=a;i++)
    {
        for(k=t;k<a;k++)
            printf(" ");
        for(j=0;j<i;j++)
        {
            printf(" * ");
            t=t+1;
        }
        printf("\n");
    }
    return 0;
}
