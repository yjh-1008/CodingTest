/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    

    const swap = (a,b) => [nums[a], nums[b]] = [nums[b], nums[a]];


    let index = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i]!== 0) {
            swap(i, index);
            index++;
        }
    }
    return nums
};