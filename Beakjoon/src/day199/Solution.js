const fs = require('fs');
let [str, bombStr] = fs.readFileSync('./text.txt').toString().trim().split("\n");


function Solution() {
  let stack = [];
  let chk = false;
  const bombLen = bombStr.length;
  for(let i=0;i<str.length;i++) {
    stack.push(str.charAt(i));
    while(stack.length >= bombLen) {
      let tmp = stack.slice(-bombLen).join("");
      if(tmp === bombStr) {
        stack.splice(-bombLen, bombLen);
      }else {
        break;
      }
    }
  }
  console.log(stack.length? stack.join("") : 'FRULA')
}

Solution();