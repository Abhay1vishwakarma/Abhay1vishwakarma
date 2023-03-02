#include<stdio.h>
int main(){
int arr[]={10,200,300,4,5};
int large=arr[0];
for (int i = 1; i <5; i++)
{
if (arr[i]>large)
{
large=arr[i];
}
}

printf("large is %d",large);
return 0;
}