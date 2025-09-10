// arr에서 연속된 부분 배열의 합이 target이 되는 경우의 수 구하기
function countSubarraysWithSum(arr, target) {
  let left = 0, right = 0, sum = 0, count = 0;
  while (right < arr.length) {
    sum += arr[right];
    while (sum > target && left <= right) {
      sum -= arr[left++];
    }
    if (sum === target) count++;
    right++;
  }
  return count;
}

const twoPointer = (arr,target) => {
  let left = 0, right = 0, sum = 0;
  const LEN = arr.length;
  while(right < LEN) {
    if(sum > target) {
      sum -= arr[left]
      left++;
    } else if( sum === target) {
      return;
    } else {
      sum += arr[right];
      right++;
    }
  }

  if(sum > target && left < LEN) {
    while(left < LEN) {
      sum -= arr[left];
      left++;
    }
  }
}