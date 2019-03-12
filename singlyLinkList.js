class Node  {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let item = new Node(val)
        if (!this.head) {
            this.head = item
            this.tail = item
        } else {
            this.tail.next = item
            this.tail = item
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        let current = this.head
        let prev = this.head
        while(current.next) {
            prev = current
            current = current.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) {
            return undefined
        }
        let shifted = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return shifted
    }

    unshift(val) {
        let item = new Node(val)
        if (!this.head) {
            this.head = item
            this.tail = item
        } else {
            item.next = this.head
            this.head = item   
        }
        this.length++
        return this
    }

    get(num) {
        if (num < 0 || num >= this.length) {
            return null
        }
        let count = 0
        let current = this.head
        while (count !== num) {
            current = current.next
            count++
        }
        return current
    }

    set(num, val) {
        let foundNode = this.get(num)
        if (fooundNode) {
            foundNode.val = val
            return true
        } 
        return false 
    }

    insert(num, val) {
        if (num < 0 || num >= this.length) {
            return false
        }
        if (num === this.length) {
            return !!this.push(val)
        }
        if (num === 0) {
            return !!this.unshift(val)
        }
        else {
            let item = new Node(val)
            let newNode = this.get(num - 1)
            let temp = newNode.next
            newNode.next = item
            item.next = temp  
            this.length++
            return true
        } 
    }

    remove(num) {
        if (num < 0 || num > this.length) {
            return undefined
        }
        if (num === this.length - 1) {
            return this.pop()
        }
        if (num === 0) {
            return this.shift()
        }
        let prevItem = this.get(num - 1)
        let itemToRemove = prevItem.next
        prevItem.next = itemToRemove.next
        this.length--
        return itemToRemove
    }

    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    
    }
}

const list = new SinglyLinkedList()

list.push(200)
list.push(300)
list.push(400)
list.push(500)
list.push(600)
list.push(700)
list.reverse()

console.log(list)