class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        if (!val) {
            return null
        }
        let item = new Node(val)

        if (this.length === 0) {
            this.head = item
            this.tail = item
        } else {
            this.tail.next = item
            item.prev = this.tail
            this.tail = item
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        const currentTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            currentTail.prev = null
        }
        this.length--
        return currentTail
    }

    shift() {
        if (!this.head) {
            return undefined
        }
        const oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        if (!val) {
            return null
        }
        let item = new Node(val)

        if (this.length === 0) {
            this.head = item
            this.tail = item
        } else {
            this.head.prev = item
            item.next = this.head
            this.head = item
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        if (index <= this.length / 2) {
            let count = 0
            let current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
            return current
        } else {
            let count = this.length - 1
            let current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
            return current
        }
    }

    set(index, val) {
        let node = this.get(index)
        if (node !==  null) {
            node.value = val
            return true
        } else {
            return false
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            return !!this.unshift(val)
        } 
        if (index === this.length) {
            return !!this.push(val)
        } 
        else {
            let item = new Node(val)
            let prevNode = this.get(index - 1)
            let nextNode = prevNode.next
            prevNode.next = item
            item.prev = prevNode
            item.next = nextNode
            nextNode.prev = item
        }
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index === 0) {
            return this.shift()
        } 
        if (index === this.length - 1) {
            return this.pop()
        } 
        else {
            let itemToRemove = this.get(index)
            itemToRemove.next.prev = itemToRemove.prev
            itemToRemove.prev.next = itemToRemove.next
            itemToRemove.next = null
            itemToRemove.prev = null
        }
        this.length--
        return itemToRemove
    }

    reverse() {
        if (this.length === 0) {
            return null
        }
        let current = this.head
        this.head = this.tail
        this.tail = current

        let prev = null
        let next

        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            current.prev = next
            
            prev = current
            current = next
        }
        return this
    }
}

let list = new DoublyLinkedList

list.push('brad')
list.push('bob')
list.push('brandon')
list.push('bren')
list.insert(2, 'bobby')

console.log(list.get(2))

