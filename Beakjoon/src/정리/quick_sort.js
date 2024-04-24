


const quick_sort = (arr) => {
  if(arr.length <= 1) return arr;

  let pivot = arr[0];
  const left = [];
  const right = [];
  for(let i=low;i<=arr.length;i++) {
    if(pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  quick_sort(left);
  quick_sort(right);

  return [...left, pivot, ...right];
}