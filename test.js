class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
    }
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const myList = new LinkedList(10);
myList.append(5);
myList.append(10);
console.log(myList);