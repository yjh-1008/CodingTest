
function solution(n, k) {
    let answer = [];
    let arr= Array(n).fill().map((item, index) => index+1);
    let fac = arr.reduce((acc, val) => acc * val, 1);
    k--;
    while(answer.length !== n) {
        fac = fac/arr.length;
        let tmp = arr[Math.floor(k/fac)];
        answer.push(tmp);
        k = k % fac;
        arr = arr.filter(e => e !== tmp);
    }
    return answer;
}

solution(3,5);