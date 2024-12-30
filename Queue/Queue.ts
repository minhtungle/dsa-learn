import { CustomNode } from "../CustomNode/CustomNode";

class Queue {
    first: CustomNode | null;
    last: CustomNode | null;
    length: number = 0;
    constructor(value) {
        var newNode = new CustomNode(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value: number): Queue {
        var newNode = new CustomNode(value);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        };
        this.length++;
        return this;
    }
    dequeue(): CustomNode | undefined {
        if (this.first === null) return undefined;
        var pre = this.first;
        if (pre.next === null) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            pre.next = null;
        }
        this.length--;
        return pre;
    }
}