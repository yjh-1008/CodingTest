package DAY12.택배배달과수거하기;

public class Solution {
    public static long solution(int cap, int n, int[] deliveries, int[] pickups) {
        long answer = 0;
        int delSum = 0, pickSum = 0;
        int dIdx = 0;
        int pIdx = 0;
        for(int i=0;i<n;i++) {
            if(deliveries[i] != 0 ) {
                delSum += deliveries[i];
                dIdx = i+1;
            }
            if(pickups[i] != 0 ) {
                pickSum += pickups[i];
                pIdx = i + 1;
            }
        }
        int dCount  = 0, pCount = 0;
        while(true) {
            if(dIdx == 0 && pIdx == 0) {
                break;
            }

            answer += Math.max(dIdx,pIdx)*2;
            dCount = 0;
            pCount = 0;
            while(true) {

                if(dIdx ==0) break;
                if(dCount == cap && deliveries[dIdx-1] != 0)  break;

                if(cap-dCount < deliveries[dIdx-1]) {
                    deliveries[dIdx-1] -= cap-dCount;
                    dCount += cap-dCount;
                }else {
                    dCount += deliveries[dIdx-1];
                    deliveries[dIdx-1] = 0;
                    dIdx--;
                }
                if(dIdx == 0) break;
                if(dCount == cap && deliveries[dIdx-1] == 0) {
                    dIdx--;
                }
            }

            while(true) {
                if(pIdx ==0) break;
                if(pCount == cap && pickups[pIdx-1] != 0)  break;
                if(cap-pCount < pickups[pIdx-1]) {
                    pickups[pIdx-1] -= cap-pCount;
                    pCount += cap-pCount;

                }else {
                    pCount += pickups[pIdx-1];
                    pickups[pIdx-1] = 0;
                    pIdx--;
                }

                if(pIdx == 0) break;
                if(pCount == cap && pickups[pIdx-1] == 0) {
                    pIdx--;
                }
            }
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(2,2,new int[]{0,0},new int[]{0,0}));
    }
}
