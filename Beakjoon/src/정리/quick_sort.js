


// const quick_sort = (arr) => {
//   if(arr.length <= 1) return arr;

//   let pivot = arr[0];
//   const left = [];
//   const right = [];
//   for(let i=low;i<=arr.length;i++) {
//     if(pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   quick_sort(left);
//   quick_sort(right);

//   return [...left, pivot, ...right];
// }

const quick_sort = (arr) => {
  if(arr.length <= 1) return arr;

  const left = [], right = [];
  const pivot = arr[0];
  for(let i=0;i<arr.length;i++) {
    if(pivot < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  const lSort = quick_sort(left);
  const rSort = quick_sort(right);


  return [...lSort, pivot, ...rSort];
  
}

const quick_sort1 = (arr) => {
  if(arr.length <= 1) return arr;

  const left = [], right = [], pivot = arr[0];

  for(let i=1; i<arr.length;i++) {
    if(arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSort = quick_sort1(left);
  const rSort = quick_sort1(right);

  return [...lSort, pivot, ...rSort];
}