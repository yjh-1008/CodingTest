

// function main() {
//   let bit = 18;
//   //비트 끄기
//  // S& = ~(S<<idx)
//   let idx = 1;
//   bit &= ~(1<<idx);
//   console.log(bit)
// }


function main() {
  let arr = ["사과","딸기","포도","배"];
  let n  =arr.length;
  for(let i=0; i< (1<<n); i++) {
    let ret = "";
    for(let j=0;j<n;j++) {
      if(i & (1<<j)) {
          ret += arr[j]+" ";
      }
    }
    console.log(ret)
  }
}
main()