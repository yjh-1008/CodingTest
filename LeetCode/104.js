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

function go(cur, cnt) {
    if(cur === null || cur=== undefined) return cnt;

    let ret1 = go(cur.left, cnt+1);
    let ret2 = go(cur.right, cnt+1);

    return Math.max(ret1, ret2);
}

var maxDepth = function(root) {
    let answer= -Infinity;
    let left = root?.left;
    let right = root?.right;

    if(!root) return 0;
    console.log(go(left, 1), go(right, 1))
    answer = Math.max(Math.max(answer, go(left, 1), go(right, 1)))
    

    return answer;
};