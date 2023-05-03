function solution(nums) {
    var answer = 0;
    const set = new Set();

    nums.forEach((item) => {
        set.add(item);
    })
    if(set.size > nums.length /2) {
        answer = nums.length/2
    }else {
        answer = set.length;
    }
    return answer;
}

const nums = [3,1,2,3];

solution(nums);