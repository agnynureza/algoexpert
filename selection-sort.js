/*
best : O(n^2) time | O(1) space
average : O(n^2) time | O(1) 
worst : O(n^2) time | O(1) 
*/

function selectionSort(array) {
    for(let i = 0 ; i < array.length-1 ; i++){
          let j = i 
          let min = i
          while(j < array.length){
              if(array[j] < array[min]){
                  min = j
              }
              j++
          }
          let temp = array[i]
          array[i] = array[min]
          array[min] = temp
          console.log(array)
      }
      return array
  }