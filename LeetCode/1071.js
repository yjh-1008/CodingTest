/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
   
    let len1 = str1.length, len2 = str2.length;

    const isValid = (k) => {
        if(len1 % k === 0
            && len2 % k === 0
        ) {
            const tmp = str1.slice(0, k)
            return str1.replaceAll(tmp, "") === "" &&
            str2.replaceAll(tmp,"") === ""
        } else {
            return false;
        }
    }

    for(let i = Math.min(len1, len2); i > 0; i--) {
        if(isValid(i)) {
            return str1.slice(0, i)
        }
    }

    return "";
};