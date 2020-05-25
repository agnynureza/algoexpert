/*
O(log(N)) time | O(1) space

*/


//iteration codecademy version
// function binarySearch(array, target) {
//     let left_pointer = 0
//     let right_pointer = array.length
      
//     while(left_pointer < right_pointer ){
//         let mid_index = Math.floor((left_pointer + right_pointer)/2)
//         let mid_value = array[mid_index]
        
//         if(mid_value == target){
//             return mid_index
//         }
//         if(target < mid_value){
//             right_pointer = mid_index
//         }
        
//         if(target > mid_value){
//             left_pointer = mid_index+1
//         }
//     }
//     return -1
// }


//algoexpert version
function binarySearch(array,target){
    let left = 0
    let right = array.length - 1

    while(left <= right){
        let mid_index = Math.floor((left+right)/2)
        let mid_value = array[mid_index]
        if(mid_value == target){
            return mid_index
        }else if(target > mid_value){
            left = mid_index + 1
        }else{
            right = mid_index - 1
        }
    }
    return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))