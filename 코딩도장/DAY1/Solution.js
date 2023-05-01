function Solution() {
   console.log(Array(10000).fill(0).map((d,i) => i+1).toString().split('').filter((v)=>v==='8').length)
}

Solution()