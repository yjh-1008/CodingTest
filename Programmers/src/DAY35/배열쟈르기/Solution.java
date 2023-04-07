package DAY35.배열쟈르기;

public class Solution {
    public static int[] solution(int n, long left, long right) {
        int len = (int) right - (int) left;
        int[] answer = new int[len+1];
        int idx=0;
        for(long i=left; i<right;i++) {
            long row = i/n;
            long col = i%n;
            answer[idx++] = Math.max((int)row, (int)col)+1;
        }

        return answer;
    }
    public static void main(String[] args) {
        System.out.print(
                solution(
                        3,2,5
                )
        );
    }
}
