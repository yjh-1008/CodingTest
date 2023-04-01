package DAY30.광물캐기;

import java.util.HashMap;

public class Solution {
    static int sum;
    static int answer = Integer.MAX_VALUE;
    public static void dp(int depth, int fatigue, int idx, int[] picks, String[] minerals) {
        if(depth == sum) {
            if(answer > fatigue) {
                answer = fatigue;
            }
        }

        for(int i=0; i<3 ;i++) {
            //System.out.println(depth+" "+i+" "+picks[i]+" "+fatigue);
            int tmp = 0;
            int tmpIdx = idx;
            if(picks[i] == 0) continue;
            picks[i] -= 1;
            int count = 5;

            while(true) {
                if (count == 0) break;
                if (tmpIdx == minerals.length) break;
                switch (i) {
                    case 0:
                        tmp += 1;
                        count -= 1;
                        tmpIdx++;
                        break;
                    case 1:
                        if (minerals[tmpIdx].equals("diamond")) {
                            tmp += 5;
                        } else tmp += 1;
                        count -= 1;
                        tmpIdx++;
                        break;
                    case 2:
                        if (minerals[tmpIdx].equals("diamond")) {
                            tmp += 25;
                        } else if (minerals[tmpIdx].equals("iron")) {
                            tmp += 5;
                        } else {
                            tmp += 1;
                        }
                        count -= 1;
                        tmpIdx++;
                        break;
                }
            }
            dp(depth+1, fatigue+tmp, tmpIdx, picks, minerals);
            picks[i] += 1;
        }
    }

    public static int solution(int[] picks, String[] minerals) {
        for(int p: picks) {
            sum += p;
        }

        dp(0,0,0,picks, minerals);

        return answer;
    }

    public static void main(String[] args) {
        System.out.println(
                solution(
                        new int[] {1, 1, 0},
                        new String[] {"iron", "iron", "diamond", "iron", "stone", "diamond", "diamond", "diamond"}
                )
        );
    }
}
