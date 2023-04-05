package DAY33.연속펄스부분수열의합;

public class Solution {
//    public static  long dp(int[] sequence,int idx, int pulse) {
//        long result = 0L;
//        for(int i=idx;i<sequence.length;i++) {
//            if(sequence[i] * pulse < 0) break;
//            result += sequence[i] * pulse;
//            pulse *= -1;
//        }
//        return result;
//    }

    public static long solution(int[] sequence) {
        long answer= 0;
        long[] total_sum1 = new long[sequence.length+1];
        long[] total_sum2 = new long[sequence.length+1];
        long idx1=0, idx2=0,max1=0,max2=0;
        int tmp = 1;
        for(int i=0; i<sequence.length;i++) {
            total_sum1[i+1] = ((long) sequence[i] * tmp) + total_sum1[i];
            total_sum2[i+1] = ((long) sequence[i] * (tmp*-1)) + total_sum2[i];
            if(max1 < total_sum1[i+1]) {
                idx1 = i;
                max1 = total_sum1[i+1];
            }
            if(max2 < total_sum2[i+1]) {
                idx2 = i;
                max2 = total_sum2[i+1];
            }
            tmp *= -1;
        }

        long result1=max1, result2=max2;

        for(int i=0;i<=idx1;i++) {
            if(max1 - total_sum1[i] > result1) result1 = max1 - total_sum1[i];
        }
        for(int i=0;i<=idx2;i++) {
            if(max2 - total_sum2[i] > result2) result2 = max2 - total_sum2[i];
        }
        answer = Math.max(result1, result2);
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution(
                new int[] {2, 3, -6, 1, 3, -1, 2, 4}
        ));
    }
}
