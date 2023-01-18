#include<stdio.h>
//#include<conio.h>
  int atm(int amount);
int main(){
int amount;
printf("enter your amount:");
scanf("%d",&amount);
printf("%d",atm(amount));
  return 0;
}
int atm(int amount){
    int rtrn=amount;
    int a1=0;
    int a2=0;
    int a3=0;
    int a4=0;
    int a5=0;
    int a6=0;
    int a7=0;
    int a8=0;
    int a9=0;
    int a10=0;
    if((rtrn>=2000) && (rtrn%2000==0 || rtrn%2000!=0)){
        if(rtrn%2000==0){
        a1=rtrn/2000;
        rtrn=a1;
        printf("note of 2000Rs: %d \n",rtrn);
       }
       else if(rtrn%2000!=0){
        int b1=rtrn/2000;
        a1=rtrn%2000;
        rtrn=a1;
        printf("note of 2000Rs: %d\n",b1);
       }
    }

    if((rtrn>=500)&&(rtrn%500==0 || rtrn%500!=0)){
        if(rtrn%500==0){
            a2=rtrn/500;
            rtrn=a2;
        printf("notes of 500Rs: %d\n",a2);
        }
        else if(rtrn%500!=0){
          int b2=rtrn/500;
         a2=rtrn%500;
         rtrn=a2;
         printf("notes of 500: %d\n",b2);
        }
    }

    if((rtrn>=200)&& (rtrn%200==0 || rtrn%200!=0)){
        if(rtrn%200==0){
            a3=rtrn/200;
            rtrn=a3;
            printf("notes of 200Rs: %d\n",a3);
        }
        else if(rtrn%200!=0){
            int b3=rtrn/200;
            a3=rtrn%200;
            rtrn=a3;
            printf("notes of 200Rs: %d\n",b3);

        }
    }

    if((rtrn>=100)&&(rtrn%100==0 || rtrn%100!=0)){
        if(rtrn%100==0){
            a4=rtrn/100;
            rtrn=a4;
            printf("notes of 100Rs: %d\n",a4);
        }
        else if(rtrn%100!=0){
            int b4=rtrn/100;
            a4=rtrn%100;
            rtrn=a4;
            printf("notes of 100Rs: %d\n",b4);
        }
    }

    if((rtrn>=50)&&(rtrn%50==0 || rtrn%50!=0)){
        if(rtrn%50==0){
            a5=rtrn/50;
            rtrn=a5;
            printf("notes of 50Rs: %d\n",a5);
        }
        else if(rtrn%50!=0){
            int b5=rtrn/50;
            a5=rtrn%50;
            rtrn=a5;
            printf("notes of 50Rs: %d\n",b5);
        }
    }

    if((rtrn>=20)&&(rtrn%20==0 || rtrn%20!=0)){
        if(rtrn%20==0){
            a6=rtrn/20;
            rtrn=a6;
            printf("notes of 20Rs: %d\n",a6);
        }
        else if(rtrn%20!=0){
            int b6=rtrn/20;
            a6=rtrn%20;
            rtrn=a6;
            printf("notes of 20Rs: %d\n",b6);
        }
    }

    if((rtrn>=10)&&(rtrn%10==0 || rtrn%10!=0)){
        if(rtrn%10==0){
            a7=rtrn/10;
            rtrn=a7;
            printf("notes of 10Rs: %d\n",a7);
        }
        else if(rtrn%10!=0){
            int b7=rtrn/10;
            a7=rtrn%10;
            rtrn=a7;
            printf("notes of 10Rs: %d\n",b7);
           //printf("save Rs: %d\n",rtrn);
        }
    }

    if((rtrn>=5)&&(rtrn%5==0 || rtrn%5!=0)){
        if(rtrn%5==0){
            a8=rtrn/5;
            rtrn=a8;
            printf("coin of 5Rs: %d\n",a8);
        }
        else if(rtrn%5!=0){
            int b8=rtrn/5;
            a8=rtrn%5;
            rtrn=a8;
            printf("coin of 5Rs: %d\n",b8);
            //printf("save Rs: %d\n",rtrn);
        }
    }

    if((rtrn>=2)&&(rtrn%2==0 || rtrn%2!=0)){
        if(rtrn%2==0){
            a9=rtrn/2;
            rtrn=a9;
            printf("coin of 2Rs: %d\n",a9);
        }
        else if(rtrn%2!=0){
            int b9=rtrn/2;
            a9=rtrn%2;
            rtrn=a9;
            printf("coin of 2Rs: %d\n",b9);
           printf("save Rs: %d\n",rtrn);
        }
    }

    if(rtrn<=0){
        printf("ha ha ha ha! enter a valid amount:");
    }
}