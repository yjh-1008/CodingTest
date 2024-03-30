/**
 * 문자의 길이가 4000이기 때문에 순열은 불가능하다.
 * 
 */

const fs = require('fs');
let [str1, str2] = fs.readFileSync('./text.txt').toString().trim().split("\n");
let ret = 0;

function Solution() {
  const LCS = Array.from({length: str1.length+1}, () => new Array(str2.length+1).fill(0));
  str1 = str1.split(""), str2=str2.split("");
  // console.log(str1, str2);
  for(let i=1; i<=str1.length; i++) {
    for(let j=1; j<=str2.length; j++) {
      if(str1[i-1] === str2[j-1]) {
        LCS[i][j] = LCS[i-1][j-1]+1;
      } else {
        LCS[i][j] = 0;
      }

      if(LCS[i][j] > ret) {
        ret = LCS[i][j];
      }
    }
  }
  console.log(ret);
}

Solution();