package DAY14.연속부분수열합의개수;

import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static int solution(int[] elements) {
        int answer = 0;
        Set<Integer> set = new HashSet<>();
        for(int i=1;i<=elements.length;i++) {
            for(int j=0;j<elements.length;j++) {
                int sum = 0;
                for(int k=j;k<i+j;k++) {
                    if(k >= elements.length) {
                        sum +=elements[k%elements.length];
                    }else {
                        sum += elements[k];
                    }
                }
                set.add(sum);
            }
        }
        answer = set.size();
        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(new int[]{7,9,1,1,4}));
    }
}
