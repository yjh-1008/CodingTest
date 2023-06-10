const fs = require('fs');
const [n,...input] = fs.readFileSync('./index.txt').toString().trim().split('\n');

function Solution() {
    let ret = [];

    for(let i=0;i<n;i++) {
        let str = input[i].split('');
        let arr = [];
        let prev="";
        for(let j=0;j<str.length;j++) {
            let data = str[j];
            if(!isNaN(data)) {
                prev+=data;
            }else {
                if(prev !== "") {
                    arr.push(BigInt(prev));
                    prev = ""
                }
            }
        }
        if(prev!=="") arr.push(BigInt(prev))
        arr.forEach((d) => ret.push(d))
    }
    ret.sort((a,b)=>a<b?-1:(a>b?1:0));
    return ret;
}

console.log(Solution().join('\n'));