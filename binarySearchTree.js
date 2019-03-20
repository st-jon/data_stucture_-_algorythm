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

    breathFirstSearch() {
        let data = [],
            queue = [],
            node = this.root

        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            data.push(node)

            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }

        return data
    }

    depthFirstSearch() {
        let visited = [],
            current = this.root

        function traversal(node) {
            visited.push(node)
            if (node.left) {
                traversal(node.left)
            }
            if (node.right) {
                traversal(node.right)
            }
        }
        traversal(current)
        return visited
    }

    depthFirstSearchPostOrder() {
        let visited = []

        function traversal(node) {
            if (node.left) {
                traversal(node.left)
            }
            if(node.right) {
                traversal(node.right)
            }
            visited.push(node.value)
        }
        traversal(this.root)
        return visited
    }

    depthFirstSearchInOrder() {
        let visited = []

        function traversal(node) {
            node.left && traversal(node.left)
            visited.push(node.value)
            node.right && traversal(node.right)
        }
        traversal(this.root)
        return visited
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(20)
tree.insert(8)
tree.insert(2)
tree.insert(13)
tree.insert(17)
tree.insert(24)


console.log(tree.depthFirstSearchInOrder())

