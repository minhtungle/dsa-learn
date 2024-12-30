export class CustomNode {
    value: any;
    next: CustomNode | null;
    prev: CustomNode | null;
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

