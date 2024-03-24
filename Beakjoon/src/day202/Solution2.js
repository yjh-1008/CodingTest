//오르막길 3배
//평지는 2배
//내리막길은 1

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(v => v.split(" ").map(Number));
const chked = Array.from({length:N+1},() => new Array(N+1).fill(0));
function getCombinations(arr, selectNum) {
  const result = [];
  if(selectNum == 1) {
    return arr.map(v => [v]);
  }

  arr.forEach((item, index, origin) => {
    const rest = origin.slice(index+1);
    const combis = getCombinations(rest, selectNum-1);
    const attacted = combis.map(v => [item,...v]);
    result.push(...attacted);
  });
  return result;
}

function isConn(x, y) {
  return chked[x][y] == 1;
}


function Solution() {
  arr.forEach((v) => {
    chked[v[0]][v[1]] = 1;
  })
  const combiArr = [];
  for(let i=1;i<=N;i++) {
    combiArr.push(i);
  }
  const combis = getCombinations(combiArr, 2);
  let ret = 0;
  for(const v1 of combis) {//왼쪽 마을
    for(const v2 of combis) { //오른쪽 마을
      const [lv1, lv2] = v1;
      const [rv1, rv2] = v2;
      if(isConn(lv1, rv1) && isConn(lv1, rv2) && isConn(lv2, rv1) && isConn(lv2, rv2)) {
        ret+=1;
      }
    }
  }
  console.log(ret)
}

Solution()