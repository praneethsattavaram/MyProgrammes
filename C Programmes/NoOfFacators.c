#include<stdio.h>

int main()
{
    int n,i,arr[101],j=0,sum;
    printf("Enter the value: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            arr[j++]=i;
            printf(" %d \n",i);
        }
    }
    for(int k=0;k<j;k++)
    {
        printf(" %d" ,arr[k]);
        sum+=arr[k];
        printf("%d",sum);
    }
    return 0;
}
