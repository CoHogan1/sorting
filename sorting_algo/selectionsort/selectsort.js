let list = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
// [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]

const selectionSort = (array) => {
    let arr = array.slice()

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        
        // const temp = arr[i]
        // arr[i] = arr[minIndex]
        // arr[minIndex] = temp
    }

    console.log(arr)
    return arr
}


selectionSort(list)
