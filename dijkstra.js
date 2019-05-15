// class PriorityQueue {
//     constructor() {
//         this.values = []
//     }
//     enqueue(value, priority) {
//         this.values.push({value, priority})
//         this.sort()
//     }
//     dequeue() {
//         return this.values.shift()
//     }
//     sort() {
//         this.values.sort((a,b) => a.priority - b.priority)
//     }
// }

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class weightedGraph {
    constructor() {
        this.adjancyList = {}
    }
    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = []
        }
    }
    addEdges(vertex1, vertex2, weight) {
        this.adjancyList[vertex1].push({node: vertex2, weight})
        this.adjancyList[vertex2].push({node: vertex1, weight})
    }
    dijkstra(start, end) {
        let q = new PriorityQueue()
        let distances = {}
        let previous = {}
        let shortestPath = []
        let current
        Object.keys(this.adjancyList).forEach(item => {
            if (item === start) {
                distances[item] = 0
                q.enqueue(item, 0)
            } else {
                distances[item] = Infinity
                q.enqueue(item, Infinity)
            }
            previous[item] = null
        })

        while(q.values.length) {
            current = q.dequeue().value
            if (current === end) {
                while(previous[current]) {
                    shortestPath.push(current)
                    current = previous[current]
                }
                break
            }
            if (current || distances[current] !== Infinity) {
                for (let item in this.adjancyList[current]) {
                    let next = this.adjancyList[current][item]
                    let candidate = distances[current] + next.weight
                    if (candidate < distances[next.node]) {
                        distances[next.node] = candidate
                        previous[next.node] = current
                        q.enqueue(next.node, candidate)
                    }
                }
            }
        }
        return shortestPath.concat(current).reverse()
    }
}

const graph = new weightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdges('A', 'B', 4)
graph.addEdges('A', 'C', 2)
graph.addEdges('B', 'E', 3)
graph.addEdges('C', 'D', 2)
graph.addEdges('C', 'F', 4)
graph.addEdges('D', 'E', 3)
graph.addEdges('D', 'F', 1)
graph.addEdges('E', 'F', 1)

// console.dir(graph, {depth: null})
console.log(graph.dijkstra("A", "E"))