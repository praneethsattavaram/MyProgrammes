# include <stdio.h>

int main ()
{
    int n,i=0;
    printf("Enter the number of time 'Hello World!' needs to be printed:");
    scanf("%d",&n);
    while(i<n)
    {
        printf("Hello World!\n");
        i++;
    }
    return 0;
}
