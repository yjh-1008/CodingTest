

function main() {
  let bit = 18;
  //비트 끄기
 // S& = ~(S<<idx)
  let idx = 1;
  bit &= ~(1<<idx);
  console.log(bit)
}

main()