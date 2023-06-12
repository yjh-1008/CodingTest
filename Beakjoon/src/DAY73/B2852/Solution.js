const fs = require('fs');
let [n, ...input] = fs.readFileSync('./index.txt').toString().trim().split('\n');

function hTm(t) {
    let tmp = t.split(":");
    return parseInt(tmp[0])*60 + parseInt(tmp[1]);
}

function Solution() {
    n=parseInt(n);
    let ret = new Array(2).fill(0), scores = new Array(2).fill(0);
    let history=[], answer = [];
    let winning=0, tmp = 0,i;
    //winning =1 1 팀이 이기고있음, 2는 2팀.
    for(let i=0; i<n;i++) {
        let tmp = input[i].split(' ');
        history.push([parseInt(tmp[0]), hTm(tmp[1])]);
    }
    history.sort((a,b) => a[1] - b[1])
    tmp = history[0][1];
    for( i=0;i<n;i++) {
        //시간이 추가되는 조건 => 점수가 역전 됐을 때.
        if(scores[0] > scores[1]) {
            ret[0] += history[i][1] - tmp;
        }else if(scores[0] < scores[1]) { 
            ret[1] += history[i][1] - tmp;
        }
        history[i][0] === 1 ? scores[0]++ : scores[1]++;
        tmp = history[i][1];
    }
    if(scores[0] > scores[1]) {
        ret[0] += 48*60 - history[n-1][1];
    }else if(scores[0] < scores[1]) { 
        ret[1] += 48*60 - history[n-1][1];
    }
    ret.forEach((data)=> {
        let h = parseInt((data/60) /10) === 0 ? "0"+parseInt(data/60) : parseInt(data/60);
        let m = parseInt((data%60) /10) === 0 ? "0"+parseInt(data%60) : parseInt(data%60);
        answer.push(`${h}:${m}`)
    })
   
    return answer
}

console.log(Solution().join('\n'))