class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let item = new Node(val)

        if (this.root === null) {
            this.root = item
            return this
        }
        if (this.root === item) {
            return this
        }
        else {
            let current = this.root
            while(true) {
                if (item.value === current.value) {
                    return this
                }
                if (item.value > current.value) {
                    if (current.right === null) {
                        current.right = item
                        return this
                    } else {
                        current = current.right
                    }
                }
                else if (item.value < current.value) {
                    if (current.left === null) {
                        current.left = item
                        return this
                    } else {
                        current = current.left
                    }
                }
            }   
        }
    }

    find(val) {
        if (this.root === null) {
            return false
        }
        if (this.root === val) {
            return this.root
        }
        else {
            let current = this.root
            while (true) {
                if (val > current.value ) {
                    if(current.right === null) {
                        return false
                    } else {
                        current = current.right
                    }
                }
                else if (val < current.value) {
                    if (current.left === null) {
                        return false
                    } else {
                        current = current.left
                    }
                }
                else {
                    return current
                }
            }    
        }
    }
}

let tree = new BinarySearchTree()
tree.insert(20)
tree.insert(10)
tree.insert(130)
tree.insert(2)

console.log(tree.find(110))


console.log(tree.find(20))

