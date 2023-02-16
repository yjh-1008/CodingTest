package DAY06.시소짝꿍;

import java.util.*;

public class Solution {
    static int n;
    static boolean chk[] = new boolean[4004];
    static int meters[] = {1,2,3,4};
    static long answer=0;
    public static long solution(int[] weights) {
        Arrays.sort(weights);
        int count =0;
        for(int i=0;i<weights.length; i++) {
            if(i!=0) {
                if(weights[i] == weights[i-1]){
                    count--;
                    answer += count;
                    continue;
                }
            }
            count=0;
            for(int j=i+1;j<weights.length;j++) {
                if(weights[i] == weights[j] ||
                        weights[j]*2 == weights[i]*3||
                        weights[j]*2 == weights[i]*4 ||
                        weights[j] *3 == weights[i]*4
                ) {
                    count++;
                }
            }
            answer += count;

        }
        return answer;
    }
    public static void main(String[] args) {
       System.out.print(solution(new int[]{100,180,360,100,270}));
    }
}
