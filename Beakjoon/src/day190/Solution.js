const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
let bits = parseInt(0,2);
const ret= [];
function exec(cmd, num) {
  switch(cmd) {
    case "add":
      bits |= (1<<num);
      break;
    case "remove":
      bits &= ~(1<<num);
      break;
    case "check":
      // console.log(bits & (1<<num))
      if(bits & (1<<num)) ret.push(1);
      else ret.push(0);
      break;
    case "toggle":
      bits ^= (1<<num);
      break;
    case "all":
      bits |= (1<<21)-1;
      break;
    case "empty":
      bits=0;
      break;
    default:
      break;
  }
}

function Solution() {

  for(let i=1;i<=N;i++) {
    const [cmd, num] = input[i].split(" ");
    exec(cmd, parseInt(num));
    // console.log(bits);
  }
  console.log(ret.join("\n"))
}

Solution();