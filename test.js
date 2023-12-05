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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    this.printList();
  }

  prepend(value){
    const newNode = new Node(value);

  }

  printList(){
    const list = [];
    let currentNode = this.head;
    while(currentNode !== null){
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }
}

const myList = new LinkedList(10);
myList.append(5);
myList.append(16);
console.log(myList);