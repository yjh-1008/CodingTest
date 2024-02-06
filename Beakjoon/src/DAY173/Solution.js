const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [n, m, k] = input[0].split(' ').map((e) => parseInt(e));

const nutritions = new Array(n);
const curNutritions = Array.from(new Array(n), () => new Array(n).fill(5));
const trees = Array.from(new Array(n), () => Array.from(new Array(n), () => []));

for(let i = 0; i < n; i++) {
  nutritions[i] = input[i + 1].split(' ').map((e) => parseInt(e));
}

for(let i = 0; i < m; i++) {
  let [r, c, age] = input[n + i + 1].split(' ').map((e) => parseInt(e));
  r -= 1, c -= 1;
  trees[r][c].push(age);
}

while (k--) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      let nutrition = curNutritions[i][j];
      const treeList = trees[i][j];

      let diedIndex = -1;

      // 봄
      for(let k = treeList.length - 1; k >= 0; k--) {
        const age = treeList[k];
        if (age === -1) break;
        if (age <= nutrition) {
          nutrition -= age;
          treeList[k] += 1;
        } else {
          diedIndex = k;
          break;
        }
      }
      curNutritions[i][j] = nutrition;

      // 여름
      for(let k = diedIndex; k >= 0; k--) {
        const age = treeList[k];
        if (age === -1) break;
        curNutritions[i][j] += Math.floor(age / 2);
        treeList[k] = -1;
      }
    }
  }

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      const treeList = trees[i][j];
      // 가을
      for(let k = treeList.length - 1; k >= 0; k--) {
        const age = treeList[k];
        if (age === -1) break;
        if (age % 5 === 0) breed(i, j);
      }
      addNutrition(i, j);
    }
  }
}

console.log(countAliveTree());

function breed(i, j) {
  const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dc = [-1, 0, 1, -1, 1, -1, 0, 1];

  for(let k = 0; k < 8; k++) {
    const nr = dr[k] + i;
    const nc = dc[k] + j;
    if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
    trees[nr][nc].push(1);
  }
}

function addNutrition(i, j) {
  curNutritions[i][j] += nutritions[i][j];
}

function countAliveTree() {
  let count = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      for(let k = trees[i][j].length - 1; k >= 0; k--) {
        const age = trees[i][j][k];
        if (age === -1) break;
        else count++;
      }
    }
  }
  return count;
}