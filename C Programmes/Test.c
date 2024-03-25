# include <stdio.h>

int main()
{
    int n;
    printf("Enter the value of an integer: ");
    scanf("%d",&n);
    if(n<0)
        printf("The given integer is negative.");
    else if(n>0)
        printf("The given integer is positive.");
    else
    printf("The given integer is zero.");
    return 0;
}
