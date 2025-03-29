class Stack{
    constructor(){
        this.stack=[];
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        this.stack.pop();
    }

    reverseString(s){
        for(let i = 0 ; i< s.length ; i++){
            this.stack.push(s[i]);
        }
        let rev="";
        for(let i =0;i<s.length;i++){
            rev+=this.stack.pop();
        }
        console.log(rev);
    }

    print(){
        for (let i = this.stack.length - 1; i >= 0; i--) {
          console.log(this.stack[i]);
    }
    }
}



const stack = new Stack();
stack.print();
stack.reverseString("hello");
