function hTom(str) {
    const times = str.split(':');
    return Number(times[0])*60 + Number(times[1]);
}

function solution(plans) {
    var answer = [];
    plans.map((data) => {
        const result = hTom(data[1]);
        data[2] = Number(data[2]);
        data[1] = result
    });

    plans.sort((o1, o2) => {
        return o1[1] - o2[1];
    })
    let stack = [];

    for(let i=0; i<plans.length-1; i++) {
        const [name, time, duraing]  = plans[i];
        
        if(time + duraing <= plans[i+1][1]) {
            answer.push(name);
            let available = plans[i+1][1] - time - duraing;
            
            while(stack.length) {
                const [currentName, currentTime] = stack.pop();
                if(currentTime <= available) {
                    available -= currentTime;
                    answer.push(currentName)
                }else {
                    stack.push([currentName, currentTime - available]);
                    break;
                }
            }
        }else {
            stack.push([name, duraing - (plans[i+1][1] - time)]);
        }

    }
    answer.push(plans[plans.length-1][0]);
    
    while(stack.length) {
        answer.push(stack.pop()[0]);
    }
    return answer
}