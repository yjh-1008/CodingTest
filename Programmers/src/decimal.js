function solution(numbers) {
    var answer = 0;
    
    const visited = {}
    
    function isDecimal(value) {
        if(value === 1 || value === 0) return false;
        
        if(value % 2 === 0) return value === 2
            
        const sqrt = parseInt(Math.sqrt(value));

         for( let divider = 3; divider <= sqrt; divider += 2) {
            if(value % divider === 0) {
                return false;
            }   
        } 
  
        return true;
    }
    
    function getPermutation(arr, selectionNumber) {
        const result = [];
        
        if(selectionNumber === 1) return arr.map((v) => [v])
        
        arr.forEach((v, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
            
            const permutation = getPermutation(rest, selectionNumber-1);
            
            const attached = permutation.map((permu) => [...permu, v]);
            
            result.push(...attached);
        })
        
        return result;
        
        
    }
    
    //모든 조합 
    const permutations = [];
    for(let i=numbers.length;i>0;i--) {
        permutations.push(...getPermutation(numbers.split(""), i));
    }
    permutations.map((v) => {
        const numeric = Number(v.join(""))
        if(!visited[numeric] && isDecimal(numeric)) {
            visited[numeric] = true;
            answer++
        }
    })
    
    console.log(visited)
    return answer;
}



function getPermutation(arr, selectNumber){
  const result = [];

  if(selectNumber === 1) arr.map((v) => [v]);

  arr.forEach((v, index, origin) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index+1)];

    const permutation = getPermutation(rest, selectNumber-1);

    const attached = permutation.map((item) => [v, ...item]);

    result.push(...attached);
  })
}