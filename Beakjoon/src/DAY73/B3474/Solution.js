const fs = require('fs');
let [n, ...input] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);

function Solution() {
    let ret = [];

    for(let i=0;i<n;i++) {
        let a = 2;
        let b = 5;
        const num = input[i];
        let result1=0;
        let result2=0;
        while(a<=num) {
            result1 += parseInt(num/a);
            a*=2;
        }
        while(b<=num) {
            result2 += parseInt(num/b);
            b*=5;
        }
        ret.push(Math.min(result1,result2))
    }

    return ret;
}

console.log(Solution().join('\n'));