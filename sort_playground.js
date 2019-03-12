// SELECT SORT

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

// INSERT SORT

function insertSort(arr) {
    let i, j
    for (i = 1; i < arr.length; i++) {
        let current = arr[i]
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j]
        } 
        arr[j+1] = current
    }
    return arr
}

console.log(insertSort([2, 5, 8, 1, 4, 3]))


// MERGE SORT

function merge(arr1, arr2) {
    let newArr = []
    let i = 0, j = 0
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++
        }
        if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j])
            j++
        } 
    }
    if (i === arr1.length) {
        newArr = [...newArr, ...arr2.slice(j)]
    }
    if (j === arr2.length) {
        newArr = [...newArr, ...arr1.slice(i)]
    }
    return newArr
}

console.log(merge([1, 3, 10, 15, 46], [2, 6, 12, 26, 78]))

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1, 3, 2, 94, 8, 24, 20, 91, 109]))


// QUICK SORT

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    let count = start
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            count++
            swap(arr, count, i)
        }
    }
    swap(arr, start, count)
    return count
}


function quickSort(arr, left = 0, right = arr.length - 1) {   
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    } 
    return arr
}

console.log(quickSort([12,78,26,4,6,2,100]))

const quickSort2 = (arr) => {
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    
    if(arr.length <= 1) {
        return arr
    }
    
    for (let i = 0; i < arr.length -1; i ++){
        if (arr[i]>pivot){
            right.push(arr[i])
        } 
        else {
            left.push (arr[i])
        }  
    }

    return [...quickSort2(left), pivot, ...quickSort2(right)];
}

console.log(quickSort2([5,4,1,3,8,7,9,2,6]))


// RADIX SORT


function getDigit(num, place) {
    let divident = 10 ** place
    let number = num / divident
    return Math.floor(number) % 10
}

function digitCount(num) {
    if (num === 0) {
        return 1
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(arr) {
    let maxLoop = mostDigits(arr)
    for (let i = 0; i < maxLoop; i++) {
        let buckets= Array.from({length: 10}, () => [])
        arr.forEach(item => {
            let bucket = getDigit(item, i)
            buckets[bucket].push(item)
        })
        arr = [].concat(...buckets)
    }
    return arr
}

console.log(radixSort([500,4615,12,3,8908,765,94,2,65]))

