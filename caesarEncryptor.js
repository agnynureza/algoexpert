/*
O(N) time | O(N) space
 */

function caesarCipherEncryptor(string, key) {
	const alfa = 'abcdefghijklmnopqrstuvwxyz'
	const len = alfa.length
	key = key%len
	let result = ''
	for(let i = 0 ; i < string.length ; i++){
		let index = alfa.indexOf(string[i])
		let newIndex = index + key >= len ? Number(index) + key - len : index + key
		result += alfa[newIndex]
	}
	return result
}
