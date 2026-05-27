function solution(priorities, location) {
    var answer = 0;
    const q = [];
    const map = {}
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });
    
    while(arr.length) {
        const cur = arr.shift();
        
        const hasHigh = arr.some((v) => v.priority > cur.priority);
        if(hasHigh) { //우선순위가 더 높은게 있다면
            arr.push(cur);
        } else {
            q.push(cur);
        }
    }
    console.log(q)
    return q.findIndex((v) => v.index === location)+1;
}