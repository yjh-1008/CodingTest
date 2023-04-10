class Solution {
    public static int[] solution(int[] sequence, int k) {
        int[] answer = new int[2];
        int len = Integer.MAX_VALUE;
        int lt=0,rt=0;
        int sum=sequence[0];
        if(sum == k) {
            return new int[]{lt,rt};
        }
        while(rt<sequence.length) {
            if(sum < k) {
                if(++rt < sequence.length) {
                    sum += sequence[rt];
                }
            }else if(sum > k) {
                sum -= sequence[lt++];
            }else {
                if(rt - lt < len){
                    len = rt - lt;
                    answer = new int[]{lt, rt};
                }
                sum -= sequence[lt++];
            }
        }


        //System.out.print(answer[0]+" "+answer[1]);
        return answer;
    }
}