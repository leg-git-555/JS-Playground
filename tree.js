// binary tree

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null
    }

    // insert a new node into the binary tree
    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    // helper function to insert a new node recuresively
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // search for a specific value in the bonary tree
    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (!node){
            return false;
        }

        
    }
}

const myTree = new BinaryTree;

myTree.insert(5)
myTree.insert(2)
myTree.insert(6)
myTree.insert(100)

console.log(myTree)