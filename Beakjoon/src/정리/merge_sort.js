const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);


// const merge_sort = (arr, low, high) => {
//   if(low < high) {
//     const mid = Math.floor((low+high)/2);
//     merge_sort(arr, low, mid);
//     merge_sort(arr, mid+1, high);
//     merge(arr, low, mid, high);
//   }

// } 
// const ret = new Array(N);
// const merge = (arr, low, mid, high) => {
//   let i = low, j = mid+1;
//   let k = low;

//   while(i<= mid && j<= high) {
//     if(arr[i] < arr[j]) {
//       ret[k++] = arr[i++];
//     } else {
//       ret[k++] = arr[j++];
//     }
//   }

//   while(i<=mid) {
//     ret[k++] = arr[i++];
//   }

//   while(j<=high) {
//     ret[k++] = arr[j++];
//   }

//   for(let k=low;k<=high;k++) {
//     arr[k] = ret[k];
//   };
//   return arr;
// }

// merge_sort(nums, 0, N-1);
// console.log(nums.join(" "));

// const mergeSort = (nums, low, high) => {
//   if(low<high) {
//     const mid = Math.floor((low+high)/2);
//     mergeSort(nums, low, mid);
//     mergeSort(nums, mid+1, high);
//     Merge(nums, low, mid, high);
//   }
// }

// const Merge = (arr, low, mid, high) => {
//   let i = low, j = mid+1, k=low;
  
//   while(i<=mid && j<=high) {
//     if(arr[i]<arr[j]) {
//       ret[k++] = arr[i++];
//     } else {
//       ret[k++] = arr[j++];
//     }
//   }

//   while(i<=mid) {
//     ret[k++] = arr[i++];
//   } 

//   while(j <= high) {
//     ret[k++] = arr[j++];
//   }

//   for(let k=row; k<=high;k++) {
//     arr[k] = ret[k];
//   }
// }


const merge_sort = (arr, low, high) => {
  if(low<high) {
    const mid = Math.floor((low+high)/2);
    merge_sort(arr, low, mid);
    merge_sort(arr, mid+1, high);
    merge(arr, low, high);
  }
}

const merge = (arr, low, high) => {
  const mid = Math.floor((low+high)/2);
  let i = low, j = mid+1, k=low;
  let tmp = new Array(arr.length);
  while(i < mid && j<=high) {
    if(arr[i] < arr[j]) {
      tmp[k++] = arr[i++];
    } else {
      tmp[k++] = arr[j++];
    }
  }

  while(i<mid+1) {
    tmp[k++] = arr[i++];
  }

  while(j<=high) {
    tmp[k++] = arr[j++];
  }


  for(let k=low;k<=high;k++) {
    arr[k] = tmp[k];
  }
}

