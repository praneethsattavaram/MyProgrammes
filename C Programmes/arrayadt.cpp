#include<iostrem.h>
class linearlist
{
    int x[50],b,c,s,i,n,k,t,len;
public:
    void insertion();
    void insertion(int,int);
    void deletion();
    void deletion(int);
    void display();
    void search();
    void get();
    linearlist()
    {
        len=0;
    }
};

void linearlist::insertion()
{
    int a;
    cout<<"Enter an element to insert";
    cin>>a;
    x[len]=a;
    len++;
}

void linearlist::insertion(int p,int pos)
{
    if(len==0)
    {
        x[lem]=p;
        len++;
        return;
    }
    for(i=len;i>pos;i--)
        x[i]=x[i-1];
    x[pos]=p;
    len++;
}

void linearlist::deletion()
{
    if(len==0)
    {
        cout<<"List is empty cannot be deleted\n";
        return;
    }
    cout<<"The deleted element is"<<x[len];
    x[len--]=0;
}

void linearlist::deletion(int pos)
{
    if(len==0)
       {
        cout<<"Cannot delete list is empty\n";
        return;
       }
    cout<<"The deleted element is\n";
    for(int i=pos;i<len-1;i++)
    {
        x[i]=x[i+1];
    }
    x[len--]=0;
}

void linearlist::search()
