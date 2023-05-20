const fs = require('fs');
let input = fs.readFileSync('./index.txt').toString().trim().replaceAll('\r','').split('\n');

const [n,m] = input.shift().split(' ').map(v => parseInt(v));

function solution() {
    let answer= [];
    const [dic, quiz] = [input.slice(0,n),input.slice(n)];
    const map = new Map();
    dic.forEach((d, idx)=> {
        map.set(d, idx+1);
    })
    quiz.forEach((data)=> {
        
        if(isNaN(data)) {
            answer.push(map.get(data));
        }else {
            answer.push(dic[parseInt(data)-1])
        }
    })
    return answer;
}   

console.log(solution().join('\n'))