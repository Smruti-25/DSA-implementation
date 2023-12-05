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
    if(!this.root){
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if( value < currentNode.value ){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookUp(value){
    if(!this.root){
      return false;
    }else {
      let currentNode = this.root;
      while( currentNode ){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if (value > currentNode.value ){
          currentNode = currentNode.right;
        } else if(value === currentNode.value){
          return currentNode;
        }
      }
      return false;
    }
  }

  bfs(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while(queue.length){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  remove(){

  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(tree.lookUp(10));
console.log(tree.lookUp(99));
// console.log(JSON.stringify(traverseNode(tree.root)));

function traverseNode (node) {
  const tree = {value: node.value};
  tree.left = node.left === null? null :
  traverseNode(node.left);
  tree.right = node.right === null? null :
  traverseNode(node.right);
  return tree;
}
