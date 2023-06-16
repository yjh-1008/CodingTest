const fs = require('fs');''
const input = fs.readFileSync('./index.txt').toString().trim().split('\n')

function Solution() {
    let ret=[],str,chk, st;
    let keys = ['(', '[']
    for(let i=0;i<input.length-1;i++) {
        str = input[i].split('');
        st = []
        chk = true;
        for(let j=0;j<str.length;j++) {
            let s = str[j];
            if(s === '(' || s === '[') {
                st.push(s);
            }else if(s === ')' || s === ']') {
                let top = st.pop();
                if((top === '(' && s === ')'))  {
                    continue;
                }else if( (top === '[' && s === ']')) {
                    continue;
                }
                else {
                    chk = false;
                    break;
                }   
            }
        }
        if(st.length > 0) chk = false;
        ret.push(chk ? 'yes' : 'no' )
    }

    return ret;
}

console.log(Solution().join('\n'));