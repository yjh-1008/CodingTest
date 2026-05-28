function solution(n, computers) {
    var answer = 0;
    
    
    const visited = Array(n).fill(false);
    
    function dfs(cur) {
        const nodes = computers[cur];
        
        nodes.forEach((n, index) => {
            if(visited[index] === false && n===1) {
                visited[index] = true;
                dfs(index);
            }
        })
    }
    for(let i=0;i<n;i++) {
        if(visited[i] === false) {
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}