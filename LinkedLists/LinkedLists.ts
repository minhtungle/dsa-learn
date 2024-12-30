import { CustomNode as _Node } from '../CustomNode/CustomNode'
export class _LinkedLists {
    head: _Node | null;
    tail: _Node | null;
    length: number = 0;
    constructor(value: any) {
        var node = new _Node(value);
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }
    /**
     * 
     * @param node 
     * Add an node at tail position of linkedlist
     */
    push(value: any) {
        var newNode = new _Node(value);
        if (this.head) {
            this.tail!.next = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }
    /**
     * Take the last node out of linkedlist and return it
     */
    pop() {
        if (!this.head) return null;
        var pre = this.head,
            temp = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return temp;
    }
    /**
     * @param value
     * Add a node at head of linkedlist
     */
    unshift(value) {
        var newNode = new _Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    /**
     * Take the first out of linkedlist and return it
     */
    shift() {
        if (!this.head) return undefined;
        var pre = this.head;
        this.head = this.head.next;
        this.length--;
        return pre;
    }
    /**
     * Get a node by index
     */
    get(index) {
        if (index < this.length || index > this.length) return null;
        if (!this.head) return undefined;
        var temp = this.head;
        for (let i = 0; i <= index; i++) {
            temp = temp?.next;
        }
        return temp;
    }
    /**
     * Set value for node by index
     */
    set(index, value) {
        var temp = this.get(index);
        if (temp) temp.value = value;
    }
    /**
     * Insert a node into linkedlist
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        var pre = this.get(index - 1);
        var newNode = new _Node(pre);
        newNode.next = pre.next;
        pre.next = newNode;
        this.length++;
        return true;
    }
    /**
     * Remove a node out of linkedlist
     */
    remove(index): any {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var pre = this.get(index - 1);
        var temp = pre.next;
        pre.next = temp?.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    /**
     * Revert linkedlist
     */
    revert(): _LinkedLists {
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        var pre = null,
            after = temp?.next;
        while (temp) {
            after = temp.next;
            temp.next = pre;
            pre = temp;
            temp = after;
        }
        return this;
    }
    /**
     * Find middle node
     */
    findMiddleNode(): _Node | null {
        var slow = this.head; // slow move 1 time
        var fast = this.head; // fast move twice
        while (fast != null && fast.next != null) {
            slow = slow?.next;
            fast = fast.next.next;
        } // slow move = 1/2 fast move
        return slow;
    }
    /**
     * Check linkedlist is loop
     */
    hasLoop(): boolean {
        var slow = this.head,
            fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow?.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        };
        return false;
    }
    /**
     * Find Kth from end of linkedlist
     */
    findKthFromEnd(k: number): _Node | null {
        // fast and slow always distance k nodes
        var slow = this.head,
            fast = this.head;
        for (let i = 0; i < k; i++) {
            if (fast === null) return null;
            fast = fast.next;
        };
        while (fast !== null) {
            slow = slow?.next;
            fast = fast.next;
        };
        return slow;
    }
    /**
     * @param x 
     * Arrange linkedlist by two side
     * Left is all node have value less than x
     * Right is opposite
     */
    partitionList(x: number) {
        var dump1 = this.head,
            dump2 = this.head;

        var left = dump1,
            right = dump2;

        var cur = this.head;
        while (cur !== null) {
            if (cur.value < x) {
                left?.next = cur;
                left = cur;
            } else {
                right?.next = cur;
                right = cur;
            };
            cur = cur.next;
        };
        right?.next = null;
        left.next = dump2?.next;
        this.head = dump1?.next;
        return this;
    }
    /**
     * Remove existed node
     */
    removeDuplicates() {
        const values = new Set();
        let pre = null;
        let cur = this.head;
        while (cur !== null) {
            if (values.has(cur.value)) {
                pre.next = cur.next;
                this.length--;
            } else {
                pre = cur;
                values.add(cur.value);
            };
            cur = cur.next;
        };
    }
    /**
     * Convert binary to decimal
     */
    binaryToDecimal(): number {
        var cur = this.head;
        var num: number = 0;
        while (cur !== null) {
            num = num * 2 + cur.value;
            cur = cur.next;
        };
        return num;
    }
}