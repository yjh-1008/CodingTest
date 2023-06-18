const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const map = [];
const visited = [];
const my = [1,-1,0,0], mx = [0,0,-1,1];
let cnt = 3;
var arr;
for(let i=0;i<N;i++) {
    let r = input.shift().split(' ').map(Number);
    let tmp = [];
    for(let j=0;j<M;j++) {
        if(r[j] === 0) tmp.push(0);
        else tmp.push(1);
    }
    map.push(r);
    visited.push(tmp);
}

let ret = -1;


function sv(y, x) {
    
    for(let i=0; i<4; i++) {
        let ny = y+my[i];
        let nx = x+mx[i];

        if(nx <0 || ny < 0 || ny>=N || nx>=M) continue;
        if(map[ny][nx] === 0 && arr[ny][nx]===0) {
            arr[ny][nx] = 1;
            sv( ny, nx);
        }
        
    }
    return;
}

function Solution(y,x) {
    if(cnt === 0){
        // //영역 검사
        arr = visited.map((v)=>[...v]);
        for(let i=0;i<N;i++) {
            for(let j=0; j<M; j++) {
                if(map[i][j] === 2) {
                    sv(i, j);
                }
            }
        }
        let count = 0;
      
        for(let i=0;i<N;i++) {
            for(let j=0; j<M; j++) {
                if(arr[i][j] === 0) count++;
            }
        }
        ret = Math.max(ret, count);
        return;
    }
    for(let i=y;i<N;i++) {
        for(let j=x; j<M; j++) {
            if(map[i][j] === 0) {
                map[i][j] = 1;
                visited[i][j] =1;
                cnt--;
                Solution(y,x);
                cnt++;
                map[i][j] = 0;
                visited[i][j] = 0;
            }
        }
    }
}

Solution(0,0)

console.log(ret);