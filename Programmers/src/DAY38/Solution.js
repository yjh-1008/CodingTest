

function solution(targets) {
    targets.sort(function(a,b) {return b[0]-a[0]})
     let answer = 1;
     let lader = targets[0][0] //맨 처음 시작점 이전의 값들은 검사할 필요 없음.
     for(let i=1; i < targets.length; i++) {
         const [start, end] = targets[i];
         if (end <=  lader) {
           lader = start;
           answer++;
         }
     }
     return answer;
 }
 

const target=  [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];

solution(target)