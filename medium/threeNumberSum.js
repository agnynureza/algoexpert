// dari array yang diberikan , cari 3 kombinasi integer untuk target sum

function main(array, target){
    array.sort((a,b)=>a-b)
    console.log(array)
    let triplets = []
    for(let i = 0 ; i< array.length - 2 ; i++){
        let left = i + 1
        let right = array.length - 1 
        while(left < right){
            let currentSum = array[i] + array[left] + array[right]
            if(currentSum == target){
                triplets.push([array[i], array[left], array[right]])
                left++;
                right--;
            }else if(currentSum < target){
                left++;
            }else if(currentSum > target){
                right--;
            }
        }
    }
    console.log(triplets)
    return triplets
}

let test1 = [12, 3, 1, 2, -6, 5, -8, 6]
let test2 = 0 
main(test1, test2)
