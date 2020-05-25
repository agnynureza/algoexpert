//algoexpert version
function binarySearch(array,target){
    if(array.length == 0){
        return -1
    }else{
        let mid_index = Math.floor((array.length-1)/2)
        let mid_value = array[mid_index]

        if(mid_value == target){
            return mid_index
        }else if(target < mid_value){
            return binarySearch(array.slice(0, mid_index), target)
        }else{
            result = binarySearch(array.slice(mid_index+1, array.length), target)
            if(result == -1){
                return -1
            }
            return result + mid_index + 1 
        }
    }
}


console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], -1))