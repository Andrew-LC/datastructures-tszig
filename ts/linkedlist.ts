class NodeContainer<T> {
  data: T;
  next?: NodeContainer<T>;

  constructor(data: T, next?: NodeContainer<T>) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: NodeContainer<T> | undefined;

  printStack(): void {
    let stack = this.head;
    console.log("Linked List:\n");
    while (stack) {
      console.log(stack.data);
      stack = stack.next;
    }
  }

  insertAtBegining(data: T): void {
    const newcontainer = new NodeContainer<T>(data);
    if (this.head) {
      newcontainer.next = this.head;
    }
    this.head = newcontainer;
  }

  insertAtEnd(data: T): void {
    const newcontainer = new NodeContainer<T>(data);
    if (this.head) {
      let stack = this.head;
      while (stack.next) {
        stack = stack.next;
      }
      stack.next = newcontainer;
    } else {
      this.head = newcontainer;
    }
  }

  insertAtPos(pos: number, data: T): void {
    const newcontainer = new NodeContainer<T>(data);
    if (pos === 0) {
      this.insertAtBegining(data);
      return;
    }
    let stack = this.head;
    let prev: NodeContainer<T> | null = null;
    for (let i = 0; i < pos; i++) {
      if (stack) {
        prev = stack;
        stack = stack.next;
      } else {
        return;
      }
    }
    if (prev) {
      prev.next = newcontainer;
    }
    newcontainer.next = stack;
  }

  deleteAtBegining(): void {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  deleteAtPos(key: number): void {
    let stack = this.head;
    let prev: NodeContainer<T> | null = null;
    for (let i = 0; i < key; i++) {
      if (stack) {
        prev = stack;
        stack = stack.next;
      } else {
        return;
      }
    }
    if (prev) {
      prev.next = stack?.next;
    } else {
      this.head = stack?.next;
    }
  }
}

const ll = new LinkedList<string>();
ll.insertAtBegining("1");
ll.insertAtEnd("2");
ll.insertAtEnd("4");
ll.insertAtEnd("5");
ll.printStack();
