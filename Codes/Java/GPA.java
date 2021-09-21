//degree  insertion sort
public void degree(){
    int size;
    System.out.println("enter the size of process");
    Scanner s=new Scanner(System.in);
    size=s.nextInt();
    int degree[]=new int[size];

    //enter your element
    System.out.println("enter your element");
    Scanner s1=new Scanner(System.in);
    for(int i=0;i<size;i++){
        degree[i]=s1.nextInt();
    }
    //sorting
                                   
    for(int j=1;j<size;j++){
     int i=j-1;
      int val=degree[j];
       while(i>-1&&degree[i]>val){
         degree[i+1]=degree[i];
           i--;
           }
            degree[i+1]=val;
        }                      
                                   
                                           //display
    System.out.println("salary is sorted ");
    for(int i=0;i<size;i++){
        System.out.println(degree[i]);
    }
    //Binary search
    System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
    int first=0;
    int last=size;
    int midel=(first+last)/2;
    System.out.println("enter your key : ");
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
