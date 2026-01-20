/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let arr = [];
    const answer = Array.from({length: temperatures.length}).fill(0)
    for(let i=0;i<temperatures.length;i++) {
        while(arr.length 
            && temperatures[arr[arr.length-1]] < temperatures[i]
        ) {
            const idx = arr.pop();
            answer[idx] = i - idx;
        }

        arr.push(i)
    }
    return answer;
};