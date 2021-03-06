let list = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
// [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]


// Though sort() gives the result we want, problem lies with the way it sorts 
// the array elements. Default sort() in JavaScript uses insertion sort by
// V8 Engine of Chrome and Merge sort by Mozilla Firefox and Safari.


const quickSort = (array) => {
    if (array.length === 1){
        return array
    }
    const pivot = array[array.length - 1]
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i])
        } else {
            rightArr.push(array[i])
        }

    }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if (leftArr.lenght > 0) {
        return [...quickSort(leftArr), pivot]
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

console.log(quickSort(list))
