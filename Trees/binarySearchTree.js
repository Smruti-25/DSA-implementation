// A node in a binary tree can only have 0,1 or 2 children.

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert( value ) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
    }else {
      let currentNode = this.root;
      while(true) {
        if( value < currentNode.value ) {
          if( !currentNode.left ) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookUp(){

  }

  remove(){

  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(11);
tree.insert(2);
tree.insert(5);
tree.insert(10);
tree.insert(13);
console.log(JSON.stringify(traverseNode(tree.root)));

function traverseNode (node) {
  const tree = {value: node.value};
  tree.left = node.left === null? null :
  traverseNode(node.left);
  tree.right = node.right === null? null :
  traverseNode(node.right);
  return tree;
}
