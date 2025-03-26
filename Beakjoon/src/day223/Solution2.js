//2910
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N, C] = input[0].split(" ").map(Number);
const obj = {};
input[1].split(" ").forEach((v, index) => {
  if(obj[v]) {
    obj[v].count += 1;
  } else {
    obj[v] = {
      count: 1,
      index: index,
      value: v
    }
  }
});
function Solution() {
  const sortArr = Object.values(obj).sort((a, b) => {
    if(a.count === b.count) {
      return  a.index - b.index;
    }
    return b.count- a.count;
  });

  let answer = ""
  sortArr.forEach((v) => {
    for(let i=0;i<v.count;i++) {
      answer+= v.value+" ";
    }
  })
  console.log(answer.trim())
}
Solution()