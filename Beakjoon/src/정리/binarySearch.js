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

function br(arr, target) {
  let left = 0, right = arr.length-1;
  let mid = Math.floor((left+right)/2);

  while(left <= right) {
    const cur = arr[mid];

    if(cur > target) {
      right = mid - 1;
    } else if (cur===target) {
      return;
    } else {
      left = mid + 1;
    }
  }
}

const getLowerIndex = (arr, target) => {
  let left = 0, right = arr.length-1;

  while(left<=right) {
    const mid = Math.floor((left+right)/2);

    if (midValue < target) {
      left = mid + 1;
    }
    if (midValue >= target) {
      right = mid - 1;
    }
  }

  return left;
}
