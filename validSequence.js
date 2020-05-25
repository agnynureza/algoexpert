/*
O(N) time | O(1) space
*/

function isValidSubsequence(array, sequence) {
	let idx = 0
	for(const arr of array){
		if(idx == sequence.length){
			break
		}
		if(sequence[idx] == arr){
			idx++
		}
	}
	return sequence.length == idx
}
