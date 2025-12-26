/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let left = 0, right = 0;

    let sStr = "", lStr = "";

    let answer = "";

    if(str1.length > str2.length) {
        sStr = str2;
        lStr = str1;
    } else {
        sStr = str1;
        lStr = str2;
    }

    for(let i=1; i<=sStr.length ;i++) {
        const tmp = sStr.slice(0, i);
        if(
            sStr.replaceAll(tmp,'').length  === 0 
            && lStr.replaceAll(tmp,'').length  === 0
        ) answer = tmp
    } 
    
    return answer;
};