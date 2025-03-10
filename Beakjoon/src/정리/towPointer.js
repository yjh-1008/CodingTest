// const twoPointer = () => {
//   const nums = [];

//   let left = 0;
//   let right = nums.length - 1;
//   let target = 0
//   while(left < right) {
//     if()
//   }
// }
const arr = [];
const kru = () => {
  const getParent = (x) => {
    if(x === arr[x]) return x;
    return arr[x] = getParent(x);
  }

  const find = (a, b) => {
    const n1 = getParent(a);
    const n2 = getParent(b);
    if(a === b) return false;
    return true;
  }


  const union = (a, b) => {
    const n1 = getParent(a);
    const n2 = getParent(b);
    if(n1<n2) return parent[n2] = n1;
    else return parent[n1] = n2;
  }
}