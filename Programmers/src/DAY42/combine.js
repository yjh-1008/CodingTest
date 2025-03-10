// 조합
// 조합은 순서가 없는 경우의 수를 구하는 것
const getCombination = (arr, n) => {
  const result = [];
  if(n === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 현재 고정된 요소 이후의 요소들을 추출
    const rest = origin.slice(index+1);

    // 나머지 요소들을 기준으로 조합을 구함
    const attached = getCombination(rest, n-1);

    // 고정된 요소와 조합을 결합
    const combine = attached.map((v) => [fixed, ...v]);

    // 결합된 조합을 결과 배열에 추가
    result.push(...combine);
  })

  return result;
}