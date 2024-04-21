const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
let nums = input[1].split(" ").map(Number);

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, i, cur){
  let max = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if(left < arrLen && arr[left] > arr[max]){
    max = left;
  }
  
  if(right < arrLen && arr[right] > arr[max]){
    max = right;
  }
  console.log(cur)
  if(max != i){
    // console.log(i, max)
    swap(arr, i, max);
    console.log(arr, max, cur);
    heapify(arr, max, cur);
    console.log('after',arr, cur);
  }
}

function heapSort(arr){
  arrLen = arr.length;

  for(let i = Math.floor(arrLen / 2); i >= 0; i--){
    heapify(arr, i, i);
  }
  
  for(let i = arrLen - 1; i > 0; i--){
    swap(arr, 0, i);
    arrLen--;
    
    heapify(arr, 0, i);
    // console.log('result',arr);
  }
  
  return arr;
}
console.log(heapSort(nums).join(" "))