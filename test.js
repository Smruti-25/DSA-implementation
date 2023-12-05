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
      this.tail = newNode;
      this.length++;
    }
  }
}