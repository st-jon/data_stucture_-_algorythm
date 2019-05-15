class Graph {
    constructor() {
        this.adjancyList = {}
    }
    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = []
        }
    }
    addEdges(vertex1, vertex2) {
        this.adjancyList[vertex1].push(vertex2)
        this.adjancyList[vertex2].push(vertex1)
    }
    removeEdges(vertex1, vertex2) {
        this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(item => item !== vertex2)
        this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(item => item !== vertex1)
    }
    removeVertex(vertex) {
        this.adjancyList[vertex].forEach(item => {
            this.removeEdges(item, vertex)
        })
        delete this.adjancyList[vertex]
    }
    dftRecursive(vertex) {
        let result = []
        let visited = {}
        let traversal = (node) => {
            if (this.adjancyList[node].length === 0) {
                return null
            } else {
                visited[node] = true
                result.push(node)
                for (let i = 0; i < this.adjancyList[node].length; i ++) {
                    if (!visited[this.adjancyList[node][i]]) {
                        traversal(this.adjancyList[node][i])
                    }
                }
            }
        }
        traversal(vertex)
        return result
    }
    dfsIterative(vertex) {
        let stack = [...this.adjancyList[vertex]]
        let result = [vertex]
        let visited = {}
        let current
        visited[vertex] = true

        while (stack.length) {
            current = stack.pop()
            if (!visited[current]) {
                visited[current] = true
                result.push(current)
                stack = [...this.adjancyList[current]]
            }
        }
        return result
    }
    bftIterative(vertex) {
        let queue = [vertex]
        let result = []
        let visited = {}
        let current
        visited[vertex] = true

        while (queue.length) {
            current = queue.shift()
            result.push(current)
            this.adjancyList[current].forEach(item => {
                if (!visited[item]) {
                    visited[item] = true
                    queue.push(item)
                }
            })
        }
        return result
    }
}

const graph = new Graph()

graph.addVertex('tokyo')
graph.addVertex('berlin')
graph.addVertex('paris')
graph.addEdges('paris', 'berlin')
graph.addEdges('tokyo', 'berlin')

// graph.removeEdges('paris', 'berlin')

graph.removeVertex('tokyo')

// console.dir(graph, { depth: null })

const traversal = new Graph()

traversal.addVertex('A')
traversal.addVertex('B')
traversal.addVertex('C')
traversal.addVertex('D')
traversal.addVertex('E')
traversal.addVertex('F')

traversal.addEdges('A', 'B')
traversal.addEdges('A', 'C')
traversal.addEdges('B', 'D')
traversal.addEdges('C', 'E')
traversal.addEdges('D', 'E')
traversal.addEdges('D', 'F')
traversal.addEdges('E', 'F')

// console.log(traversal.dftRecursive('A'))
// console.log(traversal.dfsIterative('A'))
console.log(traversal.bftIterative('A'))

console.dir(traversal, { depth: null })
