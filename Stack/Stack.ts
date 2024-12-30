import { CustomNode } from "../CustomNode/CustomNode";

class Stack {
    top: CustomNode | null;
    length: number = 0;
    constructor(value) {
        var newNode = new CustomNode(value);
        this.top = newNode;
        this.length = 1;
    }
    push(value: number): Stack {
        var newNode = new CustomNode(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }
    pop(): CustomNode | undefined {
        if (this.top === null) return undefined;
        var pre = this.top;
        if (pre.next === null) {
            this.top = null
        } else {
            this.top = this.top.next;
            pre.next = null;
        };
        this.length--;
        return pre;
    }
}