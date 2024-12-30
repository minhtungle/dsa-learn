import { CustomNode as _Node } from "../CustomNode/CustomNode";
import { _LinkedLists } from "../LinkedLists/LinkedLists";
class DoubleLinkedList {
    head: _Node | null;
    tail: _Node | null;
    length: number = 0;
    constructor(value) {
        var newNode = new _Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value: number): DoubleLinkedList {
        var newNode = new _Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        };
        this.length++;
        return this;
    }
    pop(): _Node | undefined {
        if (this.head === null) return undefined;
        this.tail = this.tail?.prev;
        var popNode = this.tail.next;
        this.tail?.next = null;
        this.length--;
        return this.popNode;
    }
    unshift(value: number) {
        var newNode = new _Node(value);
        if (this.head === null) this.push(value);
        newNode.next = this.head;
        this.head?.prev = newNode;
        this.head = newNode;
        this.length++;
    }
    shift() {
        if (this.head === null) this.pop();
        var pre = this.head;
        this.head = this.head?.next;
        if (this.head?.next !== null)
            this.head?.prev = null;
        return pre;
    }
    insert(index: number, value: number): boolean {
        if (index < this.length || index > this.length) return false;
        if (index === this.length) this.push(value);
        var temp = this.head;
        for (let i: number = 0; i <= index; i++) {
            if (i === index - 1) {
                let newNode = new _Node(value);
                newNode.next = temp?.next;
                temp?.next?.prev = newNode;
                temp?.next = newNode;
                return true;
            };
            temp = temp?.next;
        }
        return true;
    }
}