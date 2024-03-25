# include <stdio.h>

int main ()
{
    int n,i;
    printf("Enter the number of time 'Hello World!' needs to be printed:");
    scanf("%d",&n);
    for(i=0;i<n;i++)
        printf("Hello World!\n");
    return 0;
}
