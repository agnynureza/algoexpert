/*
O(N) time | O(N) space
*/

function isPalindrome(string) {
    let palindrome = ''
    for(let i = string.length -1 ; i >= 0 ; i--){
        palindrome += string[i]
    }
    return string == palindrome ? true : false
}
  