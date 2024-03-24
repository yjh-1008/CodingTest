const getCombi = (arr, selectNum) => {
  const result = [];
  if(1 === selectNum) {
    return arr.map((v) => [v]);
  }

  arr.forEach((item, idx, origin) => {
    const rest = origin.slice(idx+1);
    const combis = getCombi(rest, selectNum-1);
    const attacted = combis.map((v) => [item, ...v]);
    result.push(...attacted);
  })
  return result;
}

const getPermu = (arr, selectNum) => {
  const result= [];
  if(selectNum === 1) {
    return arr.ma((v) => [v]);
  }

  arr.forEach((item, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
    const permus = getPermu(rest, selectNum-1);
    const attacted = permus.map((v) => [item, ...v]);
    result.push(...attacted);
  })

  return result;
}