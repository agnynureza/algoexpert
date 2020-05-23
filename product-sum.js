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
  
  // Do not edit the line below.
  exports.productSum = productSum;