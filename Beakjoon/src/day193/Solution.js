const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const T = parseInt(input.shift());

function execute(arr, cmd) {
  let flag = false;
  for(let i=0;i<cmd.length;i++) {
    switch(cmd[i]) {
      case 'R':
        // arr.reverse();
        flag = !flag;
        break;
      case 'D':
        if(arr.length === 0) {
          return "error";
        } else {
          if(!flag) {
            arr.shift();
          } else {
            arr.pop();
          }
        }
        break;
    }
  }
  if(flag) return arr.reverse();
  return arr;
}

function Solution() {
  const ans = [];
  let cnt = 0;
  for(let i=0;i<T;i++) {
    const cmd = input[cnt++].split("");
    const N = parseInt(input[cnt++]);
    const str= input[cnt++];
    let arr;
    // console.log(cnt);
    if(str.length > 2) {
     arr = str.slice(1, str.length-1).split(",").map(Number);
    }else arr = []
    const ret = execute(arr, cmd)
    if(typeof ret === 'string' ) {
      ans.push(ret);
    } else {
      ans.push(`[${ret.join(',')}]`)
    }
  }
  console.log(ans.join('\n'));
}

Solution();