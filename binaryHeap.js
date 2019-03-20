class MaxBinaryHeap {
    constructor() {
        this.values = [55, 41, 39, 33, 18, 27, 12]
    }

    insert(val) {
        this.values.push(val)
        let index = this.values.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.values[index] <= this.values[parentIndex]) {
                break
            }
            let temp = this.values[index]
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = temp
            index = parentIndex
        }
    }

    extractMax() {
        let max = this.values[0]
        let last = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = last
            let index = 0
            while(index < this.values.length) {
                let leftChild = (index * 2)+ 1
                let rightChild = (index * 2) + 2
                let swapWith = this.values[leftChild] >= this.values[rightChild] ? leftChild : rightChild
                if (this.values[index] < this.values[swapWith]) {
                    let temp = this.values[index]
                    this.values[index] = this.values[swapWith]
                    this.values[swapWith] = temp
                }
                index = swapWith
            }
        }
        return max
    }

}

let heap = new MaxBinaryHeap()

console.log(heap)

console.log(heap.extractMax())

console.log(heap)

console.log(heap.extractMax())

console.log(heap)

heap.insert(3040)

console.log(heap)

console.log(heap.extractMax())

console.log(heap)

console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())


