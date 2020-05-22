/*
ada binary tree 
dimana kita harus menambahnya setiap jalurnya tree nya sampai ke leaf 

O(N) time | O(N) space -  where n is the number of nodes in the binary tree 
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    let result = []
      helper(root,0 ,result)
      return result
  }
  
  function helper(root, runningSums, sums){
      if(!root) return;
      
      let newRuningSums =  runningSums + root.value
      if(!root.left && !root.right){
          sums.push(newRuningSums)
          return 
      }
      
      helper(root.left, newRuningSums, sums);
      helper(root.right, newRuningSums, sums);
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  