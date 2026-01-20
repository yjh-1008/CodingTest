/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(const c of s) {
        switch (c){
            case '(':
            case '[':
            case '{':
                stack.push(c);
                break;
            case ')':
                if(stack[stack.length-1] !== '(') return false;
                else stack.pop();
                break;
            case ']':
                if(stack[stack.length-1] !== '[') return false;
                else stack.pop();
                break;
            case '}':
                 if(stack[stack.length-1] !== '{') return false;
                else stack.pop();
                break;
        }
    }

    return stack.length === 0;
};