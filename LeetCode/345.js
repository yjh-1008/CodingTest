/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //eeoe
    //eoee
    //모음인 인덱스를 가지고 있는 배열, 모음 인덱스를 가지고있는 배열
    const vowels = [];
    const vowelsIndex = [];
    const N = s.length;

    const vowelsArr = ['a','A','e','E','i','I','o','O','u','U']
    const isVowels = (c) => {
        return vowelsArr.includes(c);
    }

    //원래 풀이
    // for(let i=0;i<N;i++) {
    //     if(isVowels(s[i].toLowerCase())) {
    //         vowels.push(s[i]);
    //         vowelsIndex.push(i);
    //     }
    // }
    // let answer = s.split("");
    // vowelsIndex.forEach((i) => {
    //     const c = vowels.pop()
    //     answer[i] = c
    // })
    let answer = s.split("");
    let left = 0, right = answer.length-1;
    const swap = (idx1, idx2) => [answer[idx1], answer[idx2]] = [answer[idx2], answer[idx1]]
    while(left <= right) {
        const tmp1 = isVowels(answer[left]);
        const tmp2 = isVowels(answer[right])
        if(tmp1 && tmp2) {
            swap(left, right);
            left++;
            right--;
        } else {
            if(tmp1 === false) left++;

            if(tmp2 === false) right--;
        }
    }
    return answer.join("");
};