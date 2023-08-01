const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = 0,
    count = -1;
let input = [];

function getAccumulatedArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) continue;

        if (arr[i] === arr[i + 1]) {
            result.push(arr[i] * 2);
            arr[i + 1] = 0;
        } else {
            result.push(arr[i]);
        }
    }
    if (arr[arr.length - 1] !== 0) result.push(arr[arr.length - 1]);
    
    return result;
}

function pushLeft(array) {
    for (let i = 0; i < n; i++) {
        const arr = [];

        for (let j = 0; j < n; j++) {
            if (array[i][j] !== 0) {
                arr.push(array[i][j]);
                array[i][j] = 0;
            }
        }
        if (arr.length > 0) {
            const result = getAccumulatedArray(arr);

            for (let j = 0; j < result.length; j++) {
                array[i][j] = result[j];
            }
        }
    }
    return array;
}

function pushRight(array) {
    for (let i = 0; i < n; i++) {
        const arr = [];

        for (let j = n - 1; j >= 0; j--) {
            if (array[i][j] !== 0) {
                arr.push(array[i][j]);
                array[i][j] = 0;
            }
        }
        if (arr.length > 0) {
            const result = getAccumulatedArray(arr);

            for (let j = 0; j < result.length; j++) {
                array[i][n - 1 - j] = result[j];
            }
        }
    }
    return array;
}

function pushUp(array) {
    for (let j = 0; j < n; j++) {
        const arr = [];

        for (let i = 0; i < n; i++) {
            if (array[i][j] !== 0) {
                arr.push(array[i][j]);
                array[i][j] = 0;
            }
        }
        if (arr.length > 0) {
            const result = getAccumulatedArray(arr);

            for (let i = 0; i < result.length; i++) {
                array[i][j] = result[i];
            }
        }
    }
    return array;
}

function pushDown(array) {
    for (let j = 0; j < n; j++) {
        const arr = [];

        for (let i = n - 1; i >= 0; i--) {
            if (array[i][j] !== 0) {
                arr.push(array[i][j]);
                array[i][j] = 0;
            }
        }
        if (arr.length > 0) {
            const result = getAccumulatedArray(arr);

            for (let i = 0; i < result.length; i++) {
                array[n - 1 - i][j] = result[i];
            }
        }
    }
    return array;
}

function copyArray(array) {
    let arr = [];

    array.forEach((v) => {
        arr.push([...v]);
    });
    return arr;
}
let max = 0;

function moveBlock(array, cnt) {
    if (cnt === 0) {
        array.forEach((v) => {
            max = Math.max(max, ...v);
        })
        return;
    }
    let arr = copyArray(array);;
    arr = pushLeft(arr);
    moveBlock(arr, cnt - 1);
    arr = copyArray(array);
    arr = pushRight(arr);
    moveBlock(arr, cnt - 1);
    arr = copyArray(array);
    arr = pushUp(arr);
    moveBlock(arr, cnt - 1);
    arr = copyArray(array);
    arr = pushDown(arr);
    moveBlock(arr, cnt - 1);
}

rl.on('line', function (line) {
    if (count === -1) {
        n = parseInt(line);
        count = n;
        return;
    }
    count--;
    input.push(line.split(' ').map((v) => parseInt(v)));
    if (count === 0) rl.close();
}).on('close', function () {
    moveBlock(input, 5);
    console.log(max);
});