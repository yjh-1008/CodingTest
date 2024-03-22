const binarySearch = (list, left, right, target) => {
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

const arr = [6, 2, 5, 1, 7, 4, 8, 3];

const LIS = (arr) => {
  const lis = [];

  // 배열의 첫번째 값을 lis배열 처음에
  lis.push(arr[0]);

  // i= 1부터, lis의 마지막 값보다 arr[i] 크다면 그냥 삽입.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lis[lis.length - 1]) {
      lis.push(arr[i]);
    } else {
      // 그렇지 않다면 이진탐색으로 위치를 찾아 삽입
      let idx = binarySearch(lis, 0, lis.length - 1, arr[i]);
      lis[idx] = arr[i];
    }
  }
  return lis.length;
};

console.log(LIS(arr));