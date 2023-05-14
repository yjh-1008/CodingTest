const fs = require('fs');
const input = fs.readFileSync('index.txt').toString().trim().replaceAll('\r','').split('\n')


function Solution() {
    const [N,M] = input[0].split(' ');
    let pSum = [];
    pSum.push(0);
    const arr = input[1].split(' ').map((data,index) => {
        Number(data)
        if(index === 0) pSum.push(Number(data));
        else pSum.push(pSum[index]+Number(data));
        
    });
    var answer = [];

    for(let i=2; i<=Number(M) + 1; i++) {
        console.log(input[i]);
        const [s,e] = input[i].split(' ');
        answer.push(pSum[e] - pSum[s-1]);
    }
    console.log(answer);
    
}

Solution()
