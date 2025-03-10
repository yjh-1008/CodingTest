const permu = (arr, selectnum) => {
  const result =[];
  if(selectnum === 1) return arr.map((item) => [item]);

  arr.forEach((n, idx, origin) => {
    const rest = origin.slice(0, idx+1);

    const combi = permu(rest, selectnum-1);

    const attr = combi.map((item) => [n, ...item]);

    result.push(...attr);
  })

  return result;
}

const combi = (arr, selectnum) => {
  const result =[];
  if(selectnum === 1) return arr.map((item) => [item]);

  arr.forEach((n, idx, origin) => {
    const rest = [...origin.slice(0, idx),...origin.slice(idx+1) ];

    const combi = combi(rest, selectnum-1);

    const attr = combi.map((item) => [n, ...item]);

    result.push(...attr);
  })

  return result;
}