// 순열
// 순열은 순서가 있는 경우의 수를 구하는 것
const getGermutation = (arr, n) => {
  const result = [];
  if(n === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 현재 index 제외한 나머지 요소들을 추출
    const rest = [...origin.slice(0, index), origin.slice(index + 1)];

    // 나머지 요소들을 기준으로 순열을 구함
    const attached = getGermutation(rest, n - 1);

    // 고정된 요소와 순열을 결합
    const combine = attached.map((v) => [fixed, ...v]);

    // 결합된 순열을 결과 배열에 추가
    result.push(...combine);
  })
  return result;
}