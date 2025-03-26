const fs  =require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const J = Number(input.slice(1,2)[0]);
const map = Array(N+1).fill(false);
const visited = Array(N+1).fill(false);
const apples = [0,...input.slice(2).map((v) => {
  return Number(v);
})];
let answer = Number.MAX_SAFE_INTEGER;
function go(cur, total, index) {
  if(index === J+1) return answer = total;
  let r = cur + M - 1;
  if(apples[index] >= cur  && apples[index] <= r) go(cur, total, index+1);
  else {
    if(apples[index] < cur) {
      total += (cur - apples[index]);
      cur = apples[index];
    } else {
      cur += apples[index] - r;
      total += apples[index] - r;
    }
    go(cur, total, index+1)
  }

}

function Solution() {
  go(1, 0, 1)
  console.log(answer);
}

Solution();