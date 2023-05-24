const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
function solution() {
    const n = parseInt(input.shift())
    let answer = 0;
    let arr=[]
    for(let i=0;i<n;i++) {
        let str = input.shift().split('');
        //console.log(str)
        arr=[]
        for(let j=0; j<str.length;j++) {
            if(arr.length === 0) {
                arr.push(str[j]);
            }else {
                let top = arr[arr.length-1];
                let cur = str[j];
                if(top === cur) {
                    arr.pop();
                }else {
                    arr.push(cur);
                }
            }
        }
        if(arr.length === 0) answer+=1;
    }
    return answer;
}

console.log(solution());