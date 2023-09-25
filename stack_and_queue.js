// stacks are linear data structures that follow the last-in-first-out principle.
// think a stack of dirty dishes

class Stack {
    constructor() {
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    remove(){
        if (this.isEmpty()){
            return "Stack is empty"
        }
        return this.items.pop();
    }

    peek(){
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }
}

const colors = new Stack();

colors.push("blue");
colors.push("yellow");
colors.push("orange");

console.log(colors.isEmpty())

