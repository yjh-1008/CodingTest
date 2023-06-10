const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const vowels = ['a','e','i','o','u'];
function containVowels(str) {
    let chk = false;
    for(let i=0;i<str.length;i++) {
        if(vowels.includes(str[i])) {
            chk = true;
            break;
        }
    }
    return chk;
}

function continuity(str) {
    let chk = true;
  
    if(str.length <3) return true;
    for(let i=0;i<str.length-2;i++) {
        if(vowels.includes(str[i]) && vowels.includes(str[i+1]) && vowels.includes(str[i+2])) {
            chk = false;
            break;
        }else if(!vowels.includes(str[i]) && !vowels.includes(str[i+1]) && !vowels.includes(str[i+2])) {
            chk = false;
            break;
        }
    }
    return chk;
}

function sameAlpha(str) {
    let chk = true;
    if(str.length < 2) return chk;
    for(let i=0;i<str.length-1;i++) {
        if(str[i] === str[i+1]) {
            if(str[i]+str[i+1] !== "ee" && str[i]+str[i+1] !== "oo"){
                chk = false;
                break;
            }
        }
    }
    return chk;
}

function Solution() {
    let ret = [];
    let str;
    for(let i=0;i<input.length-1;i++) {
        str = input[i];
        if(containVowels(str.split('')) && continuity(str.split('')) && sameAlpha(str.split(''))) {
            ret.push(`<${str}> is acceptable.`)
        }else ret.push(`<${str}> is not acceptable.`)
    }
    return ret;
}

console.log(Solution().join("\n"));