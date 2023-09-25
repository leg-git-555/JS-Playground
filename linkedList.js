class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    append(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insert(data, position) {
        if(position < 0 || position > this.size) {
            return "Invalid position";
        }

        const newNode = new Node(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let count = 0;
            let prev = null;

            while(count < position) {
                prev = current;
                current = current.next;
                count++;
            }

            newNode.next = current;
            prev.next = newNode
        }
        this.size++
    }

    //remove a node at a specific position
    remove(position){
        if(position < 0 || position >= this.size || !this.head){
            return "Invalid position or empty linked list"
        } 

        if (position === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let count 
        }

    }
}

colorList = new linkedList

colorList.append("orange");
colorList.append("green");
colorList.append("teal");
colorList.append("peach");
colorList.insert("mauve", 1);

console.log(colorList)