/*
O(N) time | O(1) space
*/
function findThreeLargestNumbers(array) {
	let result = [0,0,0]
	for(let i = 0; i < array.length; i++){
		updateLargest(result, array[i])
	}
	return result
}

function updateLargest(result,num){
	if(result[2] == 0 || num > result[2]){
		shiftAndUpdate(result,num ,2)
	}else if(result[1] == 0 || num > result[1]){
		shiftAndUpdate(result,num ,1)
	}else if(result[0] === 0 || num > result[0]){
		shiftAndUpdate(result,num ,0)
	}
}

function shiftAndUpdate(result, num, idx){
	for(let i = 0 ; i <= idx; i++){
		if(i == idx){
			result[i] = num
		}else{
			result[i] = result[i+1]
		}
	}
	console.log(result)
}