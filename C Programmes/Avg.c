# include <stdio.h>

 float average(float a, float b)
 {
     return (a+b)/2;
 }


 int main()
 {
  float a,b;
  printf("Enter the value of a: ");
  scanf("%f",&a);
  printf("Enter the value of b: ");
  scanf("%f",&b);
  printf("The average of %f and %f is %f.",a,b,average(a,b));
  return 0;
 }
