/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1;
    let answer = -Infinity
    while(left <right) {
        const area = Math.min(height[left], height[right]) * (right-left);
        answer = Math.max(answer, area)
       if(height[left] > height[right]) right--;
        else left++;
    }
    return answer;
};