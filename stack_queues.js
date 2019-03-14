class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let item = new Node(val)
        if (!this.first) {
            this.first = item
            this.last = item
        } else {
            let current = this.first
            this.first = item
            this.first.next = current
        }
        this.size++
        return this.size
    }

    pop() {
        if (this.size === 0) {
            return null
        }
        let current = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = current.next
        }
        this.size--
        return current.value
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let item = new Node(val)
        if (this.size === 0) {
            this.first = item
            this.last = item
        } else {
            this.last.next = item
            this.last = item
        }
        this.size++
        return this.size
    }

    dequeue() {
        if (this.size === 0) {
            return null
        }
        let current = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = current.next
        }
        this.size--
        return current.value
    }
}