package DAY09.덧칠하기;

public class Solution {
    public static int solution(int n, int m, int[] section) {
        int answer = 0;
        int ps[] = new int[n+1];
        boolean []chk = new boolean[n+1];
        int tile=0;
        for(int i:section) {
            chk[i] = true;
            tile++;
        }
        for(int i=1;i<chk.length;i++) {
            if(chk[i]) {
                if(i+m > n) {
                    i = chk.length;
                }else {
                    i = i+m;

                }
                answer++;
            }
        }


        System.out.println(answer);
        return answer;
    }

    public static void main(String[] args) {
        solution(4, 1, new int[]{1,2,3,4});
    }
}
