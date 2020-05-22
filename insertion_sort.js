/*
best : O(N) time | O(N) space
worst : O(n^2) time | O(1) space 
average : O(n^2) time | O(1) space
*/

function insertionSort(array) {
    for(let i = 0 ; i < array.length ;i++){
        let j = i 
        while(j >= 0 && array[j] > array[j + 1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
            j--
        }
    }
    return array
}

  console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))
console.log(insertionSort([
    -4,
    5,
    10,
    8,
    -10,
    -6,
    -4,
    -2,
    -5,
    3,
    5,
    -4,
    -5,
    -1,
    1,
    6,
    -7,
    -6,
    -7,
    8
  ]))
console.log(insertionSort([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]))
