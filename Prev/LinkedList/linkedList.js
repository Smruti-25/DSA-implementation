class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  insertNodeAtTheEnd(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    this.printList();
  }

  insertNodeAtTheBegining(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    this.printList();
  }

  printList(){
    const list = [];
    let currentNode = this.head;
    while(currentNode!==null){
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log({list});
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

  insertAtIndex(index, value){
    if(index >= this.length){
      this.insertNodeAtTheEnd(value);
    }else {
      let newNode = new Node(value);
      let prevNode = this.traverseToIndex(index-1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++
      this.printList();
    }
  }

  removeNodeAtIndex(index){
    let prevNode = this.traverseToIndex(index-1);
    prevNode.next = prevNode.next.next;
    this.length--;
    this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.insertNodeAtTheEnd(15);
myLinkedList.insertNodeAtTheBegining(5);
myLinkedList.insertAtIndex(2,12);
myLinkedList.removeNodeAtIndex(2);
