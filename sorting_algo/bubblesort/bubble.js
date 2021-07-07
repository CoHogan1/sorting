let list = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

const bubbleSort = (array) => {
    let arr = array.slice() // makes a shallow copy of the array

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]){

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]// sol 2

                // const temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
            }
        }
    }
    console.log(array)
    console.log(arr)
    return arr
}

bubbleSort(list)
