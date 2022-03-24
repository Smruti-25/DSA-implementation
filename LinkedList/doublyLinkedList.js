class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(value){
    this.head = new Node(value);
    this.next = null;
    this.prev = null;
    this.tail = this.head;
    this.length = 1;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("List = ", array);
    console.log("Length = ",this.length);
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    this.printList();
  }

  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    this.printList();
  }

  insertAtIndex(index, value){
    if(index > this.length){
      this.append(value);
    }
    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    newNode.next = prevNode.next;
    prevNode.next.prev = newNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    this.length++;
    this.printList;
  }

  removeAtIndex(index){
    const prevNode = this.traverseToIndex(index - 1);
    prevNode.next = prevNode.next.next;
    if(prevNode.next){
      prevNode.next.prev = prevNode;
    }
    this.length--;
    this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.prepend(5);
myDoublyLinkedList.append(20);
myDoublyLinkedList.insertAtIndex(2,15);
myDoublyLinkedList.append(25);
myDoublyLinkedList.removeAtIndex(4);