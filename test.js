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
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.printList();
  }

  insert(index, value){
    if(index > this.length){
      this.append(value);
    }
    const newNode =  new Node(value);
    const prevNode = this.traverseToIndex(index-1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.printList();
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
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
myList.prepend(1);
myList.insert(2,14);
