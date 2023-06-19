const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
function Solution() {
  let ret= new Array(N).fill(0);
  let st= [];
  for(let i=0;i<N;i++) {
    if(!st.length) st.push([arr[i],i]);
    else {
      while(st.length && st[st.length-1][0]< arr[i]){
        const [data, idx] = st.pop();
          ret[idx] = arr[i]; 
      }
      st.push([arr[i],i])
    }
  }
  if(st.length) {
    st.forEach((data)=> {
      ret[data[1]] = -1;
    })
  }
  return ret;
}

console.log(Solution().join(' '));