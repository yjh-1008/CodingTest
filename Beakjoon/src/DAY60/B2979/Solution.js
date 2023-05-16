const fs = require('fs')
const input = fs.readFileSync('./index.txt').toString().replaceAll('\r','').split('\n');
let arr = Array(100).fill(0);
const costs = input[0].split(' ');
let answer = 0;
for(let i=1;i<4;i++) {
    const time = input[i].split(' ');
    for(let j = Number(time[0]); j<Number(time[1]);j++) {
        arr[j]++
    }
}

for(let i=0;i<100;i++) {
    if(arr[i] === 1) {
        answer+= Number(costs[0]);
    }else if(arr[i] ===  2) {
        answer+=Number(costs[1]*2) 
    }else if(arr[i] === 3) {
        answer += Number(costs[2]*3) 
    }
}

console.log(answer)