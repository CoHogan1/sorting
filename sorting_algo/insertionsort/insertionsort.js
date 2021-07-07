let list = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
// [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]


const insertionSort = (array) => {
    let arr = array.slice() // keep the function pure.

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j -1]) {
                arr[j], arr[j-1]]=[arr[j-1], arr[j]]
                // let temp = arr[j]
                // arr[j] = arr[j -1]
                // arr[j-1] = temp
            } else {
                break
            }
        }
    }
    console.log(arr)
    return arr
}

insertionSort(list)
