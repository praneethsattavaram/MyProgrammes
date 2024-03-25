#include<stdio.h>

int getMissingNo(int a[], int n)
{
    int i,total;
    total=(n+1)*(n+2)/2;
    for(i=0;i<n;i++)
        total-=a[i];
    return total;
}

void main()
{
    int n,arr[n],i,j;
    printf("Enter the size of the array: ");
    scanf("%d",&n);
    printf("Enter the elements in to the array: ");
    for(i=0;i<=n;i++)
    {
        scanf("%d",&arr[n]);
        int N=sizeof(arr)/sizeof(arr[0]);
        int miss=getMissingNo(arr, N);
        printf("%d",miss);
    }
}
