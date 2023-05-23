const fs = require('fs');
let [_, m, arr] = fs.readFileSync("./index.txt").toString().trim().split('\n');
m = parseInt(m);
arr = arr.split(' ').map(v => parseInt(v));


function solution() {
    let cnt=0, lt=0, rt=arr.length-1, sum=0;
    arr.sort((a,b) => a-b);
    while(lt < rt) {
        sum = arr[lt] + arr[rt];
        if (sum === m) {
            cnt++;
            lt++;
            rt--;
          } else if (sum < m) {
            lt++;
          } else {
            rt--;
          }
    }

    return cnt;
}

console.log(solution())
