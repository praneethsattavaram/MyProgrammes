# include <stdio.h>

int main()
{
    double x,y,t,s;
    int n;
    printf("Enter the value of y: ");
    scanf("%lf",&y);
    x=(y-1)/(y+1);
    t=x;
    for(s=0,n=1;t/n!=0;n+=2)
    {
        s=s+t/n;
        t=t*x*x;
    }
    printf("The value of log(%lf) is %lf.",y,2*s);
    return 0;
}
