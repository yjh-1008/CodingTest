
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let index = 0;

    for(const c of t) {
        if(c === s[index]) {
            index++;
        }
        if(index === s.length) return true;
    }
    // console.log(index)/
    return index === s.length
};