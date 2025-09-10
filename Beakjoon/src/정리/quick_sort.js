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

function qs(arr) {
  if(arr.length <= 1) return arr;

  const left= [], right = [];
  const pivot = arr[0];
  for(let i=0;i<arr.length;i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    }
  }

  const lSort = qs(left);
  const rSort = qs(right);
  return [...lSort, pivot, ...rSort]
}


function debounce(fn, timeout) {
  let timer = null;

  return function(...args) {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  } 
}


const throttle = (fn, timeout) => {
  let timer = null;

  return function(...args) {
    if(timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, timeout);
  }
}

