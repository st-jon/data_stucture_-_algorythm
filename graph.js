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
}

const graph = new Graph()

graph.addVertex('tokyo')
graph.addVertex('berlin')
graph.addVertex('paris')
graph.addEdges('paris', 'berlin')
graph.addEdges('tokyo', 'berlin')

// graph.removeEdges('paris', 'berlin')

graph.removeVertex('tokyo')

console.dir(graph, { depth: null })