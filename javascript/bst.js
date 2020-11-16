class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Creates a new node
    insert (data) {
        let newNode = new Node(data);

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method that scan the tree
    // to find the location to insert a
    // given node
    insertNode (node, newNode) {
        // If the data is less than the node
        // data should be store on the left of this node
        if (newNode.data < node.data) {
            // check if the left node is empty
            if (node.left == null) {
                node.left = newNode
            } else {
                // if left node is not empty inserNode will be called
                // again until the a correct empty node is found
                this.insertNode(node.left, newNode)
            }
        } else {
            // check if the right node is empty
            if (node.right == null) {
                node.right = newNode;
            } else {
                // if right node is not empty inserNode will be called
                // again until the a correct empty node is found
                this.insertNode(node.right, newNode);
            }
        }
    }

    // search for a node with the given data
    search (node, data) {
        if (node == null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }

    getRootNode () {
        return this.root;
    }

    findMinNode (node) {
        if (node.left == null) {
            return node;
        } else {
            return this.findMinNode(node.left)
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}

const BST = new BinarySearchTree();

BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(11);
BST.insert(15);

BST.inorder(BST.getRootNode());

let found = BST.search(BST.getRootNode(), 15);

console.log(found);