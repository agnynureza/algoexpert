//O(n^2) space || O(1) time
function twoNumberSum(array, targetSum) {
  let result = []
    for(let i = 0 ; i < array.length -1 ; i++){
        let firstNum = array[i]
        for(let j = i+1 ;  j< array.length ; j++){
            let secondNum = array[j]
            if(firstNum + secondNum== targetSum){
                result.push(array[i], array[j])
                return result
            }
        }
    }
    return result
}



console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10))
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18))
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164))

