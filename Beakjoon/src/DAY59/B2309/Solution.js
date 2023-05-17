// const getPermutations = (arr, num) => {
//     const results = [];

//     // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
//     if (num === 1) return arr.map(v => [v]);

//     arr.forEach((fixed, index, origin) => {
//         // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
//         const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//         console.log(rest)
//         // 나머지 배열을 기준으로 다시 순열을 구한다.
//         // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//         const permutations = getPermutations(rest, num - 1);

//         // 기준값(fixed)에 순열(permutations)을 붙인다.
//         const attached = permutations.map(v => [fixed, ...v]);
//         // 붙인 값을 결과 값에 넣어준다.
//         results.push(...attached);
//     });

//     return results;
// }

function getPermutations(arr, num) {
    const result=[];
    if(num === 1) return  arr.map((v) => [v]);

    arr.forEach((data, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        console.log('rest:',rest)
        const permutations = getPermutations(rest, num-1);

        const attached = permutations.map(v => [data, ...v]);
        console.log('attached',attached)
        result.push(...attached)
    })

    return result
}
  

function getCombi(arr, num) {
    const result = [];
    if(num === 1) return arr.map(v => [v]);

    arr.forEach((data, index, origin) => {
        const rest = arr.slice(index+1);

        const combinations = getCombi(rest, num-1);

        const attached = combinations.map(v => [data, ...v]);

        result.push(...attached)
    })
    return result;
}
  const arr = [1, 2, 3, 4];
  const result = getPermutations(arr, 2);