const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

(function() {
  const [N, C] = input[0].split(" ").map(Number);
  const obj = {}
  let index = 0;
  input[1].split(" ").forEach((v) => {
    v=Number(v);
    if(obj[v]) obj[v].count ++;
    else {
      obj[v] = {
        index: index++,
        count: 1
      }
    }
  });
  const arr = Object.entries(obj).sort((a, b) => {
    if(a[1].count === b[1].count) return a[1].index - b[1].index;
    return b[1].count-a[1].count;
  })
  let ret = '';
  arr.forEach((item) => {
    for(let i=0;i<item[1].count;i++) ret+= item[0]+" "
  });
  console.log(ret.trim())
})();