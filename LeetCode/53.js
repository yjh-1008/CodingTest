/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prefixSum = 0;
    let tmp = 0
    let answer = -Infinity;
   
    for(let i=0;i<nums.length;i++) {
        prefixSum += nums[i]
        answer = Math.max(answer, prefixSum - tmp);
        tmp = Math.min(tmp, prefixSum)
    }

    return answer;
};