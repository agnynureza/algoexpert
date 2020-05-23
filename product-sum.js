/*
O(N) time | O(d) 
where N is the total number of element in the array ,including sub-array 
d is th e greatest depth of special array in the array
*/

function productSum(array, multipier = 1) {
    let result = 0 
      for(let i = 0 ; i < array.length ;i ++){
          if(typeof array[i] != 'number'){
              result += productSum(array[i], multipier + 1)
          }else{
              result += array[i]
          }
      }
      return result * multipier
  }
  


console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
console.log(productSum([1, 2, [3], 4, 5]))
console.log(productSum([[[[[5]]]]]))
console.log(productSum([
    9,
    [2, -3, 4],
    1,
    [1, 1, [1, 1, 1]],
    [[[[3, 4, 1]]], 8],
    [1, 2, 3, 4, 5, [6, 7], -7],
    [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
    [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
    -3
  ]))

  
  // Do not edit the line below.
  exports.productSum = productSum;