const fs = require('fs')
const input = fs.readFileSync('./index.txt').toString().trim().replaceAll('\r','').split('\n')
const len = parseInt(input.shift());
const pattern = input.shift().split('*');
let answer = ""
for(let i=0;i<len;i++) {
    let str = input[i];
    const lenArr = [pattern[0].length, pattern[1].length];
    let pre = str.slice(0, lenArr[0])
    let last = str.slice(str.length-lenArr[1])
    if(pattern[0].length + pattern[1].length  > str.length ) answer+="NE\n"
    else {
        if(pre ===  pattern[0] &&  last=== pattern[1]) {
            answer+="DA\n"
        }else {
            answer+="NE\n"
        }
    }
    
}

console.log(answer.trim())