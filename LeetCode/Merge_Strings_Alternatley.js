/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const maxLen = Math.max(word1.length, word2.length);

    let answer = [];

    for(let i=0;i<maxLen;i++) {
        if(word1[i]!== undefined) answer.push(word1[i]);

        if(word2[i]!== undefined) answer.push(word2[i]);
    }

    return answer.join('')
};