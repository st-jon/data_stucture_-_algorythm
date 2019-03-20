class HashTable {
    constructor(size=4) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = Math.abs(char.charCodeAt(0) - 96)
            total = (total * PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let hash = this._hash(key)
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = []
        }
        this.keyMap[hash].push([key, value])
    }

    get(key) {
        let hash = this._hash(key)
        if (this.keyMap[hash]) {
            for(let i = 0; i < this.keyMap[hash].length; i++) {
                if (this.keyMap[hash][i][0] === key) {
                    return this.keyMap[hash][i][1]
                }
            }
        } 
        return undefined
    }

    keys() {
        let keys = [] 
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }    
        }
        return keys
    }
    

    values() {
        let values = [] 
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!values.includes(this.keyMap[i][j][1]))
                        values.push(this.keyMap[i][j][1])
                }
            }    
        }
        return values
    }
} 

let table = new HashTable()

table.set('pink', '000000')
table.set('cyan', "888888")
table.set('maroon', "666666")
table.set('black', "006644")
table.set('otherBlack', "006644")


console.log(table.get('black'))
console.log(table.get('pink'))
console.log(table.get('maroon'))
console.log(table.get('white'))
console.log(table.get('cyan'))

console.log(table.keys())
console.log(table.values())