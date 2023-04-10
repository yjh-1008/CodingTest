package DAY36.연속된부분수열의합;

public class Solution {
    public static int[] solution(int[] sequence, int k) {
        int[] answer = new int[2];
        int len = Integer.MAX_VALUE;
        int lt=0,rt=0;
        int sum=sequence[0];
        if(sum == k) {
            return new int[]{lt,rt};
        }
        while(rt<sequence.length-1 && lt<sequence.length-1) {
           while(rt<=sequence.length-1 && sum < k) {
               sum+=sequence[++rt];
           }

           while(lt<=sequence.length-1 && sum > k) {
               sum -= sequence[lt++];
           }

           while(sum == k) {
               if(answer[1] == 0) {
                   answer = new int[]{lt, rt};
               }else {
                   if(answer[1] - answer[0] > rt-lt){
                       answer = new int[]{lt, rt};
                   }
               }
               sum -= sequence[lt++];
           }
            if(answer[1] != 0 && answer[1] - answer[0] == 0) return answer;
        }

        return answer;
    }
    public static void main(String[] args) {
        int[] result = solution(
                new int[]{7,5,5,1,1,50,50},
                100
        );
        System.out.print(
                result[0]+" "+result[1]
        );
    }
}
