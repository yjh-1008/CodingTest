const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N, C] = input.shift().split(' ').map(Number);
let arr = input.shift().split(' ').map(Number);

function Solution() {
    let map = new Map();
    let ret = "";

    for(let i=0; i <N; i++) {
       map.set(arr[i], map.get(arr[i]) === undefined ? 1 : map.get(arr[i])+1);
    }

    let mapArr = Array.from(map)
    
    mapArr.sort((a,b)=> {
        if(a[1] > b[1]) return -1;
        else return 1;
    })
    mapArr.forEach((data)=> {
        for(let i=0;i<data[1];i++){
            ret += data[0]+" "
        }
    })
    return ret;
}

console.log(Solution());