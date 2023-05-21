const fs = require('fs')
let input = fs.readFileSync('./index.txt').toString().trim().split('');
input.sort();

function solution() {
    const map = new Map();
    input.forEach((data)=> {
        if(map.has(data)) map.set(data,map.get(data)+1);
        else map.set(data,1);
    })
    let oddChar;
    let oddCnt = 0;
    let oddValue=0;
    
    for(const [key, value] of map) {
        if(value % 2 !== 0) {
            oddChar = key;
            oddCnt += 1;
        }
    }

    let result = ""
    if(oddCnt > 1) {
        return "I'm Sorry Hansoo"
    }

    let firstValue = "";
    for(const [key, value] of map) {
        let str=""
        for(let i=0; i< Math.floor(value/2); i++) {
            str+= key;
        }

        firstValue += str;
    }

    let secondValue = firstValue.split('').reverse().join("");

    return oddCnt === 1
     ? firstValue + oddChar + secondValue 
     : firstValue + secondValue
    //각 순열들을 순회하며 펠린드롬인지 검사
    //만약에 펠린드롬이면 그대로 탈출 후 종료.
}

console.log(solution());