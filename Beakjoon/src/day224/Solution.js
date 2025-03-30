const gather = ['a','e','i','o','u'];
const correct = (text) => `<${text}> is acceptable.`
const incorrect = (text) => `<${text}> is not acceptable.`;

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

function containGather(str) {
  //모음
  for(const s of str) {
    if(gather.includes(s)) return true;
  }
  return false;
}

function dupGather(str) {
  let gatherCnt = 0;
  let notGatherCnt = 0;
  for(const s of str) {
    if(gather.includes(s)) {
      gatherCnt += 1;
      notGatherCnt = 0;
    } else {
      gatherCnt = 0;
      notGatherCnt += 1;
    }

    if(gatherCnt === 3 || notGatherCnt === 3) return false;
  }

  return true;
}

function dupString(str) {

  for(let i=1;i<str.length;i++) {
    if(str[i] === str[i-1]) {
      if(str[i]+str[i-1] === 'ee' || str[i]+str[i-1] === 'oo') continue;
      return false;
    }
  }

  return true;
}

function Solution() {
  const answer = [];
  for(const str of input) {
    let chk = true;
    if(str === "end") break;
    if(!containGather(str)) {
      answer.push(incorrect(str));
      continue;
    }

    if(!dupGather(str)) {
      answer.push(incorrect(str));
      continue;
    }

    if(!dupString(str)) {
      answer.push(incorrect(str));
      continue;
    }
    

    answer.push(correct(str));

  }

  console.log(answer.join("\n"))
}

Solution();