#include<stdio.h>
int main(){
    do
    {
  float number1,number2;  
  char arith;
  printf("enter your first number\n");
  scanf("%f",&number1);
  printf("enter your first number\n");
  scanf("%c",&arith);
 printf("enter your second number\n");
scanf("%f",&number2);

if (arith=='+')
{
 printf("%f",number1+number2);
}
else if(arith=='-')
{
  printf("%f",number1-number2);
}
else if(arith=='*')
{
  printf("%f",number1*number2);
}
else if(arith=='/')
{
  printf("%f",number1/number2);
}
else{
  printf("thank you");
}
    }
    while(1);
 return 0;
 }