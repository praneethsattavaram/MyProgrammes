# include <stdio.h>

int main()
{
    float x,s,t;
    int n;
    printf("Enter the value of x: ");
    scanf("%f",&x);
    for(s=0,t=1,n=1;t!=0;n++)
    {
        s=s+t;
        t=t*x/n;
    }
    printf("The value of Exp(%f) is %f.",x,s);
    return 0;
}
