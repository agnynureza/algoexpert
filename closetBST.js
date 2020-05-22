/*
find closest bst
binary search tree

1. simpan closest infinty terlebih dahulu 
2. banding kan closest dengan target apakah lebih besar dari value.tree dengan target
3. klu lbh dekat yang value.tree target simpan 
4. apakah nilai closest tadi lebih besar dari target, klu lebih besar tree left
5. sebaliknya tree right

only can test in algoexpert console
*/

class BinaryTree{

}

function findClosestValueInBst(tree, target) {
	return helper(tree, target, Number.POSITIVE_INFINITY)
}

function helper(tree, target, closest){
    if(tree.value == null){
        return closest
    }
    if(Math.abs(tree.value - target) < Math.abs(closest - target)){
        closest = value.tree
    }

    if(value.tree > target){
        return helper(tree.left, target, closest)
    }else if(value.tree< target){
        return helper(tree.right, target, closest)
    }else{
        return closest
    }
}