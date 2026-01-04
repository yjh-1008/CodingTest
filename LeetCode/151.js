
/**
 * @param {string} s
 * @return {string}
 */
var beforeReverseWords = function(s) {
    const arr = s.trim();
    const answer = s.split(" ").filter(v => v.trim().length).reverse().join(" ")

    return answer.trim();
};

var reverseWords = function(s) {
  return s
    .trim()
    .split(/\s+/)
    .reverse()
    .join(' ');
};