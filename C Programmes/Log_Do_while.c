# include <stdio.h>

int main()
{
    double x,y,t,s=0;
    int n=1;
    printf("Enter the value of y: ");
    scanf("%lf",&y);
    x=(y-1)/(y+1);
    t=x;
    do
    {
        s=s+t/n;
        t=t*x*x;
        n+=2;
    }
    while(t/n!=0);
    printf("The value of log(%lf) is (%lf).",y,2*s);
    return 0;
}
