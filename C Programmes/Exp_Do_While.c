# include <stdio.h>

int main()
{
    float x,s=0,t=1;
    int n=1;
    printf("Enter the value of x: ");
    scanf("%f",&x);
    do
    {
        s=s+t;
        t=t*x/n;
        n++;
    }
    while(t!=0);
    printf("The value of Exp(%f) is %f.",x,s);
    return 0;
}