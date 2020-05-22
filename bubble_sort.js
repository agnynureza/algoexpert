/*
best : O(N) time | O(N) space
worst : O(n^2) time | O(1) space 
average : O(n^2) time | O(1) space

*/

function bubble_sort(array){
    for(let i = 0 ; i < array.length ; i++){
        for(let j = 0 ; j < array.length-i-1 ;j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}


console.log(bubble_sort([8, 5, 2, 9, 5, 6, 3]))
console.log(bubble_sort([
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
console.log(bubble_sort([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]))


