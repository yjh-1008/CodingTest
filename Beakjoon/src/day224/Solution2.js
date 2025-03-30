//2870
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

function Solution() {
  const answer = [];

  input.slice(1).forEach((str) => {
    let num = '';

    for(const s of str) {
      if(isNaN(s))  {
        if(num !== '') answer.push(BigInt(num));
        num = '';
      } else {
        num += s
      }
    }

    if(num !== '') answer.push(BigInt(num));
  })
  answer.sort((a,b) => (a<b ? -1 : 1));

  console.log(answer.join("\n"))

}

Solution();