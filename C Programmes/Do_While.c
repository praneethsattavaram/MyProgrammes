# include <stdio.h>

int main ()
{
    int n,i=0;
    printf("Enter the number of time 'Hello World!' needs to be printed:");
    scanf("%d",&n);
    do
    {
        printf("Hello World!\n");
        i++;
    }while(i<n);
    return 0;
}
