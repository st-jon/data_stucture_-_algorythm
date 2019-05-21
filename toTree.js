function toTree(arr, item) {

        if (!item) {
            item = arr.find(item => item.parent === null)
        }

        let parent = {...item}
        parent.children = 
            arr.filter(x => x.parent === item.id)
                .sort((a, b) => a.id - b.id)
                .map(y => toTree(arr, y))

        for (let key in parent) {
            if(Array.isArray(parent[key]) && !parent[key].length) {
                delete parent[key]
            }
        }

        return parent     
}


const tasks = [
	{ id: 1, parent: null, value: 'Make breakfast' },
	{ id: 2, parent: 1, value: 'Brew coffee' },
	{ id: 3, parent: 1, value: 'kill all the coffee' },
	{ id: 4, parent: 2, value: 'Boil water' },
	{ id: 5, parent: 2, value: 'Grind coffee beans' },
	{ id: 6, parent: 2, value: 'Pour water over coffee grounds' },
	{ id: 7, parent: 5, value: 'lets end here'}
]

let newObj = toTree(tasks)

console.dir(newObj, { depth: null })


// output = { 
//     id: 1, 
//     parent: null, 
//     value: 'Make breakfast',
//     children: [
//         {   
//             id: 2, 
//             parent: 1, 
//             value: 'Brew coffee',
//             children: [
//                     { 
//                         id: 4, 
//                         parent: 2, 
//                         value: 'Boil water' 
//                     },
//                     { 
//                         id: 5, 
//                         parent: 2, 
//                         value: 'Grind coffee beans' },
//                     { 
//                         id: 6,
//                         parent: 2, 
//                         value: 'Pour water over coffee grounds' 
//                     }
//             ]
//         }
//     ]
// }