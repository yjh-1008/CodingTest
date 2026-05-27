function solution(brown, yellow) {
    var answer = [];
    //노란색 너비 -> (width -2) * (height -2)
    const maxWidth = Math.floor(brown/2);
    for(let i=2;i<=maxWidth;i++) {
        const wArea = i * 2; //width 위 아래
        const hArea = brown - wArea +4;
        
        if(hArea > wArea) continue;
        const yellowArea = (wArea/2-2) * (hArea/2-2)
        
        if(yellowArea === yellow) {
            answer.push(i, hArea/2)
            break;
        }
    }
    return answer;
}