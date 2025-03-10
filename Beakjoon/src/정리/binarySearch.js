function binary_search(arr, target) {
  let left=  0;
  let right = arr.length-1;
  while(left<=right) {
    const mid = Math.floor((left+right)/2);

    if(arr[mid] === target) {
      return mid;
    }

    if(arr[mid] > target) {
      right = mid-1;
    } else {
      left += 1;
    }
  }

  return -1;
}



function binary_search(arr, low, high) {
;

   let left = 0, right = arr.length-1;

   while(left <= right) {
    let mid = Math.floor((left+right)/2)
    if(arr[mid] === target) {
      return mid;
    }

    if(arr[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
   }
}

function quick(arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];
  const val = p
  for(let i=1;i<arr.length;i++) {
    if(pivot<arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quick(left), pivot, ...quick(right)];
}



// function quick_sort(arr) {
//   if(arr.length === 1) return arr;

//   const pivot = [arr[0]];
//   const left = [];
//   const right =  [];

//   for(let i=1;i<arr.length;i++) {
//     if(pivot > arr[i]) {
//       left.push(arr[i]);
//     } else if(arr[i] < pivot) {
//       right.push(arr[i]);
//     } else {
//       pivot.push(arr[i]);
//     }
//   }

//   return [...quick_sort(left), ...pivot, ...right];
// }

function merge_sort(arr, left, right) {
  if(left > right) return;
  const mid = Math.floor((left+right)/2);
  merge_sort(arr, left, mid);
  merge_sort(arr, mid+1, right);
  merge(arr, left, mid, right);
}

let mergeArr = Array(arr.length);
function merge(arr, left, mid, right) {
  let i = left, j=mid+1, k=mid;

  while(i<=mid && j <=right) {
    if(arr[i] > arr[j]) {
      mergeArr[k++] = arr[j++];
    } else {
      mergeArr[k++] = arr[i++];
    }
  }

  while(i<=mid) {
    mergeArr[k++] = arr[i++];
  }
  while(j<=right) {
    mergeArr[k++] = arr[j++];
  }
  for(let k=left;k<=right;k++) {
    arr[i] = mergeArr[i]
  }

}



// function mergeSort(arr, left, right) {
//   if(left >= right) return;
//   const mid = Math.floor((left+right)/2);

//   mergeSort(arr, left, mid+1);
//   mergeSort(arr, mid, high);

//   merge(arr, left, mid, right);
// }

// const mergeArr = []
// function merge(arr, left, mid, right) {
//   let i= left, j = mid +1, k = mid;

//   while(left<= mid && mid <= right) {
//     if(arr[left] <= arr[right]) {
//       mergeArr[k++] = arr[left++];
//       k++;
//     } else {
//       mergeArr[k++] = arr[right++];
//       k++;
//     }
//   } 
// }

function binary_search(arr, val) {
  let left = 0, right=arr.length;
  let mid  = Math.floor((left+right)/2);
  while(left<=right) {
    if(arr[mid] === val) return mid;
    else if(arr[mid] > val) {
      right = mid-1;
    } else {
      left= -1;
    }
  }
} 