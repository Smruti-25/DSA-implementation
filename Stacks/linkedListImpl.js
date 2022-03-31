class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.bottom = this.top;
    this.length = 1;
    this.printStack();
  }

  printStack() {
    const Stack = [];
    let currentNode = this.bottom;
    while(currentNode!==null) {
      Stack.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log({ Stack });
    console.log("Length = ", this.length);
  }

  push(value){
    const newNode = new Node(value);
    this.top.next = newNode;
    this.top = newNode;
    this.length++;
    this.printStack();
  }

  peek(){
    const top = this.top.value;
    console.log({top});
  }

  pop(){
    let secondLast;
    let currentNode = this.bottom;
    while(currentNode.next.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.length--;
    this.printStack();
  }
}

const myStack = new Stack("Google");
myStack.push("udemy");
myStack.push("AWS");
myStack.peek();
myStack.pop();
myStack.pop();