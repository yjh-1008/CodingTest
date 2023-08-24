const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N, _atk] = input.shift().split(' ').map(Number);
let atk = BigInt(_atk);
const arr = [];
input.forEach((data)=> arr.push(data.split(' ').map(BigInt)));

function chk(hp) {
  let curHp = hp;
  let curAtk = atk;
  for(let i=0;i<N;i++) {
    //몬스터
    if(arr[i][0] === 1n) {
      let flag = true;
      let a = arr[i][1];
      let h = arr[i][2];
      let man_hit = h / curAtk;
      if (man_hit * curAtk < h) {
        man_hit += BigInt(1);
      }
      const damage = (man_hit - BigInt(1)) * a;
      curHp -= damage;
    }else {//포션ㄴ
      let a = arr[i][1];
      let h = arr[i][2];
      curHp += h;
      if (curHp > hp) curHp = hp;
      curAtk += a;
    }
    if (curHp <= BigInt(0)) return false;
  }
  return true;
}

function Solution() {
  let lt= BigInt(0n),rt = BigInt(9e17);
  // arr.forEach((v) => {
  //   let [t, a, h] = v;
  //   if (t == 1) {
  //     rt += (h / atk + BigInt(1)) * a;
  //   }
  // });
  
  let ret = rt;
  while(lt<=rt) {
    let mid =(lt+rt)/2n;
    if(chk(mid)){
      if(ret > mid) {
        ret = mid;
      }
      rt = mid - 1n;
    }else {
      lt = mid + 1n;  
    }
  }
  console.log(ret.toString());
}

Solution();