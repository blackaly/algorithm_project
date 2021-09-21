/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pkg103;

import java.util.Scanner;


public class Main {
                                                        //degree  insertion sort
    public void degree(){
int size;
System.out.println("enter the size of process");
Scanner s=new Scanner(System.in);
size=s.nextInt();
int degree[]=new int[size];
//enter your element
System.out.println("enter your elements");
Scanner s1=new Scanner(System.in);
for(int i=0;i<size;i++){                       //O(n)
    degree[i]=s1.nextInt();
}
                                   //sorting
                                   
    for(int j=1;j<size;j++){                   //O(N)-----\
     int i=j-1;                //                            \
      int val=degree[j];         //                           ====    O(N2)  
       while(i>-1&&degree[i]>val){ //                        /
         degree[i+1]=degree[i];                //O(N)     /
           i--;
           }
            degree[i+1]=val;
        }                      
                                   
                                       //display
System.out.println("degree is sorted ");
for(int i=0;i<size;i++){                              //O(N)
    System.out.println(degree[i]);
}
//Binary search
System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
int first=0;
int last=size;
int midel=(first+last)/2;
System.out.println("searsh about  : ");
Scanner k=new Scanner(System.in);
int key=k.nextInt();
while(first<=last){
    if(degree[midel]==key){
         System.out.println(" item is found at index : "+midel);
    break;
    }
    else if(degree[midel]<key){
       first=midel+1;
    }
    else{
        last=midel-1;
    }
        midel=(first+last)/2;  
    } 
if(first>last){
     System.out.println(" item is not found ");
}
}
 //----------------------------------------------------------------------------------------------------------------------------------
                                                       
                                                          //student  bubble Sort
    public void student(){
int size;
System.out.println("enter the size of process");
Scanner s=new Scanner(System.in);
size=s.nextInt();
String student[]=new String[size];
//enter your element
System.out.println("enter your elements");
Scanner s1=new Scanner(System.in);
for(int i=0;i<size;i++){
    student[i]=s1.next();
}
//sorting
String temp;
for(int i=0;i<size;i++){
        for(int j=1;j<size-i;j++){
            if(student[j-1].compareTo(student[j])>0)    //to compar between two string 
            {
               temp= student[j-1];
                student[j-1]=student[j];
                student[j]=temp;
            }
        }
    }
//display
System.out.println("student is sorted ");
for(int i=0;i<size;i++){
    System.out.println(student[i]);
}
//Binary search
System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
int first=0;
int last=size;
int midel=(first+last)/2;
System.out.println("searsh about : ");
Scanner k=new Scanner(System.in);
String key=k.next();
while(first<=last){
    if(student[midel].compareTo(key) == 0){
         System.out.println(" item is found at index : "+midel);
    break;
    }
    else if(student[midel].compareTo(key) < 0){
       first=midel+1;
    }
    else{
        last=midel-1;
    }
        midel=(first+last)/2;  
    } 
if(first>last){
     System.out.println(" item is not found ");
}
}
 //----------------------------------------------------------------------------------------------------------------------------------
   
                                                              //department   selection sort
     public void dapartment(){
int size;
System.out.println("enter the size of process");
Scanner s=new Scanner(System.in);
size=s.nextInt();
String department[]=new String[size];
//enter your element
System.out.println("enter your element");
Scanner s1=new Scanner(System.in);
for(int i=0;i<size;i++){
    department[i]=s1.next();
}
//sorting
String temp ;
int min;
for(int i=0;i<size-1;i++){
    min=i;
        for(int j=i+1;j<size;j++){
            if(department[j].compareTo(department[min])<0)
            {
                min=j;
            }
               temp= department[min];
                department[min]=department[i];
                department[i]=temp;
            }
    }
//display
System.out.println("salary is sorted ");
for(int i=0;i<size;i++){
    System.out.println(department[i]);
}
//Binary search
System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
int first=0;
int last=size;
int midel=(first+last)/2;
System.out.println("enter your key : ");
Scanner k=new Scanner(System.in);
String key=k.next();
while(first<=last){
    if(department[midel].compareTo(key) == 0){
         System.out.println(" item is found at index : "+midel);
    break;
    }
    else if(department[midel].compareTo(key) < 0){
       first=midel+1;
    }
    else{
        last=midel-1;
    }
        midel=(first+last)/2;  
    } 
if(first>last){
     System.out.println(" item is not found ");
}
}
 //----------------------------------------------------------------------------------------------------------------------------------
   
                                                              //courses
      public void courses(){
int size;
System.out.println("enter the size of process");
Scanner s=new Scanner(System.in);
size=s.nextInt();
String courses[]=new String[size];
//enter your element
System.out.println("enter your element");
Scanner s1=new Scanner(System.in);
for(int i=0;i<size;i++){
    courses[i]=s1.next();
}
//sorting
String temp;
for(int i=0;i<size;i++){
        for(int j=1;j<size-i;j++){
            if(courses[j-1].compareTo(courses[j])>0)
            {
               temp= courses[j-1];
                courses[j-1]=courses[j];
                courses[j]=temp;
            }
        }
    }
//display
System.out.println("salary is sorted ");
for(int i=0;i<size;i++){
    System.out.println(courses[i]);
}
//Binary search
System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
int first=0;
int last=size;
int midel=(first+last)/2;
System.out.println("enter your key : ");
Scanner k=new Scanner(System.in);
String key=k.next();
while(first<=last){
    if(courses[midel].compareTo(key) == 0){
         System.out.println(" item is found at index : "+midel);
    break;
    }
    else if(courses[midel].compareTo(key) < 0){
       first=midel+1;
    }
    else{
        last=midel-1;
    }
        midel=(first+last)/2;  
    } 
if(first>last){
     System.out.println(" item is not found ");
}
}
 //----------------------------------------------------------------------------------------------------------------------------------
   
                                                        //main
    
    public static void main(String[] args) {
      
    
    Main s=new Main();
    
    System.out.println("                  student data : 1 ");
    System.out.println("                  department data : 2 ");
    System.out.println("                  courses data: 3 ");
    System.out.println("                  degrees  : 4 ");
            int chouse; 
        Scanner c = new Scanner(System.in);
         System.out.print("Enter your chouse : ");
       chouse=c.nextInt();
       
        switch(chouse){
            
            case 1 : { s.student();
}
            case 2 :  { s.dapartment();
}
            case 3 :  { s.courses();
}
            case 4 :  { s.degree();
}
            
            default : System.out.println("error");
            }
            
            
        }
}

