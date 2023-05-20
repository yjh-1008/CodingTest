const fs = require('fs');
let [range, arr] = fs.readFileSync('./index.txt').toString().trim().replaceAll('\r','').split('\n')

function solution() {
    arr = arr.split(' ').map(v=> parseInt(v));
    const [n, k] = range.split(' ').map(v=> parseInt(v))
    let sum = 0;
    let lt=0, rt=0;
    for(let i=0;i<k;i++) {
        sum += arr[i];;
    }
    let answer= sum
    for(let lt=0,rt=k; rt< n; rt++) {
        sum += arr[rt];
        sum -= arr[lt++];
        answer = Math.max(sum, answer);
    }
    return answer;
}

console.log(solution())