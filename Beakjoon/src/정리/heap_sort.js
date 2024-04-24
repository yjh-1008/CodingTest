const heapipy = (arr,i, cur) => {
  let max = i;
  let left =  i*2;
  let right = i*2 +1;

  if(arr[left] && arr[max] > arr[left]) {
    max = left;
  }

  if(arr[right] && arr[max] > arr[right]) {
    max = right;
  }

  if(max != cur) {
    swap(arr, max, i);
    heapipy(arr, max, i)
  }
}