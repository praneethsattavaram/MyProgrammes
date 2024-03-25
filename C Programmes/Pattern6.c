#include<stdio.h>

int main()
{
    int a,i,j,k,temp=1;
    printf("Enter the no of rows: ");
    scanf("%d",&a);
    for(i=a;i>=1;i--)
    {
        for(j=temp;j>=0;j--)
            printf(" ");
        for(j=i;j>=1;j--)
            printf("*");
        temp=temp+1;
        printf("\n");
    }
    return 0;
}
