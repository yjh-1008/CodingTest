package DAY32.인사고과;

import java.util.Arrays;
import java.util.PriorityQueue;

public class Solution {
    public static int solution(int[][] scores) {
        int answer = 1;
        int[] wonho = scores[0];
        Arrays.sort(scores,(o1,o2)-> {
           if(o1[0] < o2[0]) return 1;
           else if(o1[0] == o2[0]) {
               if(o1[1] > o2[1]) return 1;
               else return -1;
           }else return -1;
        });
        int max = -1;
        for(int i=0; i<scores.length;i++) {
            if(scores[i][1] < max) {
                if(scores[i].equals(wonho)) return -1;
            }else {
                max = Math.max(scores[i][1],max);
                if(wonho[0] + wonho[1] < scores[i][0] + scores[i][1]) {
                    answer+=1;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.println(
                solution(new int[][]{{2,2}, {1,4}, {3,2},{3,2}, {2,1}})
        );
    }
}
