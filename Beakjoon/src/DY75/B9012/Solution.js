const fs = require('fs');
let [N, ...input] = fs.readFileSync('./index.txt').toString().trim().split('\n');

function Solution() {
    let ret = [],st=[], str, chk;
    N = parseInt(N)
    for(let i=0;i<N;i++) {
        str = input[i].split('');
        chk = true;
        st=[];
        for(let j=0;j<str.length; j++) {
            if(str[j] === '(') st.push('(');
            else {
                if(st.length > 0) st.pop();
                else {
                    chk = false;
                    break;
                }
            }
        }
        if(st.length > 0) chk = false;
        ret.push(chk ? 'YES':'NO')
    }
    return ret;
}

console.log(Solution().join('\n'));