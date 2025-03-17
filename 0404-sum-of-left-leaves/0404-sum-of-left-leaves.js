/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    
    function helper(node,isLeft){
        if(!node){
            return 0
        }

        if(isLeft&&!node.left &&!node.right){
            return node.val
        }

        return helper(node.left,true) + helper(node.right,false)
    }

    return helper(root,false)
};