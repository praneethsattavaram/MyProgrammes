# include <stdio.h>

int main()
{
    int a,b,n,sum,diff,mul;
    float div;
    printf("Enter the value of a: ");
    scanf("%d",&a);
    printf("Enter the value of b: ");
    scanf("%d",&b);
    printf("For calculating a + b enter 1.\n");
    printf("For calculating a - b enter 2.\n");
    printf("For calculating a X b enter 3.\n");
    printf("For calculating a / b enter 4.\n");
    printf("Please enter your choice: ");
    scanf("%d",&n);
    if(n==1)
    {
        sum = a + b;
        printf("The value  of %d + %d is %d.\n",a,b,sum);
        printf("Thank you for using this Basic Calculator.\n");
    }
    else if(n==2)
    {
        diff = a - b;
        printf("The difference of %d - %d is %d.\n",a,b,diff);
        printf("Thank you for using this Basic Calculator.\n");
    }
    else if(n==3)
    {
        mul = a * b;
        printf("The multiplication of %d X %d is %d.\n",a,b,mul);
        printf("Thank you for using this Basic Calculator.\n");
    }
    else if(n==4)
    {
        div = 1.0 * a / b;
        printf(" the division of %d / %d is %f.\n",a,b,div);
        printf("Thank you for using this Basic Calculator.\n");
    }
     else
        printf("You have entered an incorrect choice.\n");
    printf("Have a nice day!");

    return 0;
}
