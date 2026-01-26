/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;right = height.length-1;

    let answer = -Infinity;

    //너비 = Math.abs(right - left) * Math.min(height[left], height[right]);

    while(left<right) {
        const area = Math.abs(right - left) * Math.min(height[left], height[right]);
        // console.log( Math.abs(right - left), Math.min(height[left], height[right]))
        answer = Math.max(answer, area)
        if(height[left] < height[right]) left++;
        else right--;
    }

    return answer;
};