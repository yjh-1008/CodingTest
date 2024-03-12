const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim();
let [a, b] = input.split(" ");
function Solution(){
  // let BigA = BigInt(a), BigB = BigInt(b);
  // console.log((BigA+BigB).toString());
  a=a.split(""), b=b.split("")
  let sum = 0, ret='';
  while(a.length || b.length || sum) {
    if(a.length) {
      sum += parseInt(a[a.length-1]);
      a.pop();
    }

    if(b.length) {
      sum +=parseInt(b[b.length-1]);
      b.pop();
    }
    ret += parseInt((parseInt(sum) %10)).toString();
    sum = parseInt(parseInt(sum)/10); 
  }
  console.log(ret.split("").reverse().join(""))
}

Solution();