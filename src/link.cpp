#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Node
{
    protected :
    int data;
    Node* next;

    public:
    Node(int da)
    {
        this->data=da;
        this->next=NULL;
    }

    void insertat(Node* &head,int da)
    {
            Node* temp=new Node(da);
            temp->next=head;
            head=temp;
    }

    void printlist(Node* &head)
    {
        Node* temp=head;
        while(temp!=NULL)
        {
            cout<<temp->data<<" "<<endl;
            temp=temp->next;
        }
    }
};
int main()
{
    Node* head=new Node(10);

    insertat(12);

    printlist(head);

    return 0;
}