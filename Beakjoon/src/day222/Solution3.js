function solutionA(str) {
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve(str.length);
    }, 2000);
  });
}

async function solutionB(str) {
  let ret = [];
  if(str.includes(",")) {
    ret = await Promise.all(str.split(",").map(solutionA));
  } else {
    ret = await solutionA(str);
  }
  console.log(ret)
  return ret;
}

console.log( solutionB("a"));
