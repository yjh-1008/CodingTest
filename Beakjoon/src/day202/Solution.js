const fs = require('fs');
const [n,m] = fs.readFileSync('./text.txt').toString().trim().split(" ").map(Number);

function getPermutations(arr, selectNum) {
  const result = [];
  if(selectNum === 1) {
    return arr.map(v => [v]);
  }

  arr.forEach((item, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
    const combis = getPermutations(rest, selectNum-1);
    const attached = combis.map((v) => [item, ...v]);
    result.push(...attached);
  })


  return result;
}

function Solution() {
  const arr = [];
  for(let i=1;i<=n;i++) { 
    arr.push(i);
  }
  const ret = getPermutations(arr, m);
  let str = '';
  // console.log(res)
  ret.forEach((item) => {
    str += `${item.join(" ")}\n`;
  })
  console.log(str.trim());
}

Solution();