class StudentNode{
    constructor(char, ...data){
        this.char = char; 
        this.data = data; 
        this.next = null;


    }
}

const middle = (start, last) => {
    if (start === null) {
        return null;
    }

    let slow = start;
    let fast = start.next;

    while (fast != last && fast != null) {
        fast = fast.next;
        if (fast != last && fast != null) {
            slow = slow.next;
            fast = fast.next;
        }
    }

    return slow;
};


class StudentLinkedList {
    constructor(head = null){
        this.head = head; 
    }

    size(){
       let count = 0; 
       let node = this.head;

       while(node){
           count++; 
            node = node.next; 
       }
       return count; 
    }


    binaySearch(name){ 
        let charName = name[0]; 
        let node = this.head;            
        let mid;
        let first = this.head; 
        let last = null;  
                 
        while(first != last || last){ 
               mid = middle(first, last)
                if(mid.char.charCodeAt(0) === charName.charCodeAt(0)) {
                    return "Found";
                }
                else if (mid.char.charCodeAt(0) > charName.charCodeAt(0)){
                    last = mid;                  
                }
                else if (mid.char.charCodeAt(0) < charName.charCodeAt(0)){
                    first =  mid.next;
           
                }
        }
    }
       

    clear(){
        this.head = null; 
    }

    getLast(){
        let lastNode = this.head; 
        if(lastNode){    
            while(lastNode.next){
                lastNode = lastNode.next;

            }
        }
        return lastNode;
            
    }

    getFirst(){
        return this.head; 
    }

    getAll(){
        let getAll = this.head; 
        while(getAll){
            console.log(getAll);
            getAll = getAll.next;
        }

    }
    
}

let studentOne = new StudentNode('A', [{id: 1, name: "Ali"}, {id: 2, name: "Aliaa"}]);
let studentTwo = new StudentNode('B', [{id: 1, name: "Bli"}, {id: 2, name: "Bliaa"}]);
let studenThree = new StudentNode('C', [{id: 1, name: "Cli"}, {id: 2, name: "Cliaa"}]);
let studenFour = new StudentNode('D', [{id: 1, name: "Dli"}, {id: 2, name: "Dliaa"}]);
let studen_5 = new StudentNode('E', [{id: 1, name: "Eli"}, {id: 2, name: "Eliaa"}]);
let studen_6 = new StudentNode('F', [{id: 1, name: "Fli"}, {id: 2, name: "Fliaa"}]);
let studen_7 = new StudentNode('G', [{id: 1, name: "Gli"}, {id: 2, name: "Gliaa"}]);
let studen_8 = new StudentNode('H', [{id: 1, name: "Hli"}, {id: 2, name: "Hliaa"}]);
let studen_9 = new StudentNode('I', [{id: 1, name: "Ili"}, {id: 2, name: "Iliaa"}]);
let studen_10 = new StudentNode('J', [{id: 1, name: "Jli"}, {id: 2, name: "Jliaa"}]);
let studen_11 = new StudentNode('K', [{id: 1, name: "Kli"}, {id: 2, name: "Kliaa"}]);
let studen_12 = new StudentNode('L', [{id: 1, name: "Lli"}, {id: 2, name: "Lliaa"}]);
let studen_13 = new StudentNode('M', [{id: 1, name: "Mli"}, {id: 2, name: "Mliaa"}]);
let studen_14 = new StudentNode('N', [{id: 1, name: "Nli"}, {id: 2, name: "Nliaa"}]);
let studen_15 = new StudentNode('O', [{id: 1, name: "Oli"}, {id: 2, name: "Oliaa"}]);
let studen_16 = new StudentNode('P', [{id: 1, name: "Pli"}, {id: 2, name: "Pliaa"}]);
let studen_17 = new StudentNode('Q', [{id: 1, name: "Qli"}, {id: 2, name: "Qliaa"}]);
let studen_18 = new StudentNode('R', [{id: 1, name: "Rli"}, {id: 2, name: "Rliaa"}]);
let studen_19 = new StudentNode('S', [{id: 1, name: "Sli"}, {id: 2, name: "Sliaa"}]);
let studen_20 = new StudentNode('T', [{id: 1, name: "Tli"}, {id: 2, name: "Tliaa"}]);
let studen_21 = new StudentNode('U', [{id: 1, name: "Uli"}, {id: 2, name: "Uliaa"}]);
let studen_22 = new StudentNode('V', [{id: 1, name: "Vli"}, {id: 2, name: "Vliaa"}]);
let studen_23 = new StudentNode('W', [{id: 1, name: "Wli"}, {id: 2, name: "Wliaa"}]);
let studen_24 = new StudentNode('X', [{id: 1, name: "Xli"}, {id: 2, name: "Xliaa"}]);
let studen_25 = new StudentNode('Y', [{id: 1, name: "Yli"}, {id: 2, name: "Yliaa"}]);
let studen_26 = new StudentNode('Z', [{id: 1, name: "Zli"}, {id: 2, name: "Zliaa"}]);

let listStudent = new StudentLinkedList(studentOne); 

studentOne.next = studentTwo;
studentTwo.next = studenThree; 
studenThree.next = studenFour; 
studenFour.next = studen_5; 
studen_5.next = studen_6; 
studen_6.next = studen_7; 
studen_7.next = studen_8; 
studen_8.next = studen_9; 
studen_9.next = studen_10; 
studen_10.next = studen_11; 
studen_11.next = studen_12; 
studen_12.next = studen_13; 
studen_13.next = studen_14; 
studen_14.next = studen_15; 
studen_15.next = studen_16; 
studen_16.next = studen_17; 
studen_17.next = studen_18; 
studen_18.next = studen_19; 
studen_19.next = studen_20; 
studen_20.next = studen_21; 
studen_21.next = studen_22; 
studen_22.next = studen_23; 
studen_23.next = studen_24; 
studen_24.next = studen_25; 
studen_25.next = studen_26; 

listStudent.binarySearch(""); // put char from A to Z















