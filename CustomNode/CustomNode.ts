export class CustomNode {
    value: any;
    next: CustomNode | null;
    prev: CustomNode | null;
    left: CustomNode | null;
    right: CustomNode | null;
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
        this.left = null;
        this.right = null;
    }
}