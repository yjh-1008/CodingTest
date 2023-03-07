package DAY09.점찍기;

public class Solution {
    public static long solution(int k, int d) {
        long answer = 0;
        long x = 0;
        long y = 0;
        for(long i=0;i <=d; i+=k) {
            long countY = (long)Math.sqrt(Math.pow(d,2)-Math.pow(i,2))/k;
            answer+=countY+1;
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.println(solution(1,5));
    }
}
