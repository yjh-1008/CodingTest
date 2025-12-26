/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    const answer = Array(candies.length).fill(false);
    const max = Math.max(...candies);
    for(let i=0;i<candies.length;i++) {
        const cur = candies[i] + extraCandies;
        if(cur >= max) answer[i] = true;
    }

    return answer;
};