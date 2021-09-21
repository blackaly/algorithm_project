 
 class Departmentnode {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
 
    let sorted = null; 
    let head = null; 

function push(val) {

    var newnode = new Departmentnode(val);
    newnode.next = head;
    head = newnode;
}

function insertionSort(headref) {

    var sorted = null;
    var current = headref;
    while (current != null) {
        var next = current.next;
        sortedInsert(current);
        current = next;
    }
    head = sorted;
}

function sortedInsert(newnode) {
    if (sorted == null || sorted.val[0].charCodeAt(0) >= newnode.val.charCodeAt(0)) {
        newnode.next = sorted;
        sorted = newnode;
    } else {
        var current = sorted;
        while (current.next != null && current.next.val[0].charCodeAt(0) < newnode.val[0].charCodeAt(0)) {
            current = current.next;
        }
        newnode.next = current.next;
        current.next = newnode;
    }
}

const middle = (start, last) => {
    if (start === null) {
        return null;
    }

    let slow = start;
    let fast = start.next;

    while (fast != last) {
        fast = fast.next;
        if (fast != last) {
            slow = slow.next;
            fast = fast.next;
        }
    }

    return slow;
};

  function binaySearch(name){            
        let mid;
        let first = sorted;
        let last = null;  
        if(sorted === null){return null;}
        while(first != last || last){ 
               mid = middle(first, last)
                if(mid.val[0][0].charCodeAt(0) === name[0].charCodeAt(0)) {
                    return "Found";
                }
                else if (mid.val[0][0].charCodeAt(0) > name[0].charCodeAt(0)){
                    last = mid;                  
                }
                else if (mid.val[0][0].charCodeAt(0) < name[0].charCodeAt(0)){
                    first =  mid.next;
           
                }
        }
    }




function printlist(head) {
    while (head != null) {
        console.log(head.val, " ")
        head = head.next;
    }
}
 
 
    push("Computer Science");
    push("Youtuber");
    push("Detective");
    push("Threater");
    push("Bussinss");
    insertionSort(head);
    printlist(sorted);
    console.log(binaySearch("Threater"));



