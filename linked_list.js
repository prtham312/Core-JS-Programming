//implementation of linked list

class node {
    constructor(value){
        this.next=null;
        this.val=value;
        this.tail=null;
    }
}
class linkedList{
    constructor(){
       this.head = null; 
       this.tail=null;
    }

    add(val){
        const newNode = new node(val);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current=current.next;
            }
            current.next = newNode;
        }
    }


    reverse(){
        let prev = null;
        let current = this.head;
        while (current) {
          const next = current.next;
          current.next = prev;
          current.prev = next;
          prev = current;
          current = next;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this.head;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}


const list = new linkedList();
list.add(3);
list.add(4);
list.add(9);
list.add(5);
list.print();