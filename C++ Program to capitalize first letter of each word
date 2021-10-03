/*  C++ Program to capitalize first letter of each word  */

#include<iostream>
#include<stdio.h>
#include<ctype.h>
#include<string.h>
using namespace std;

int main()
{

    int i;
    char a[30];
    cout<<"\nEnter any string :: ";
    gets(a);

    int len = strlen(a);

    for(i=0;i<len;++i)
    {
        if(i==0)
        {
            if(islower(a[i]))
            a[i]=toupper(a[i]);
        }
        else
        {
            if(a[i]!=' ')
            {
                if(isupper(a[i]))
                    a[i]=tolower(a[i]);
            }
            else
            {
                i++;
                if(islower(a[i]))
                    a[i]=toupper(a[i]);
            }
        }
    }
    cout<<"\nUpdated New String is :: "<<a<<"\n";

    return 0;
}
