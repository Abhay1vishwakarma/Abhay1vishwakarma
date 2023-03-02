#include<stdio.h>
int main(){
    
int table[2][10]={{2,3},{1,2,3,4,5,6,7,8,9,10}};
for (int i = 1; i <=10; i++)
{
    i=table[0][i]*table[0][0];
    printf("%d\t",i);
}
printf("\n");
for (int i = 1; i <=10; i++)
{
    table[0][i]=i;
    printf("%d\t",i*3);
}
return 0;
}