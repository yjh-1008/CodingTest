package DAY16.두큐합같게만들기;

import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    static int answer=-1;
//    public static void dp(Queue<Long> queue1, long s1, Queue<Long> queue2, long s2, long sum, int count,int max) {
//        System.out.println(s1+" "+s2);
//        if(count > 100){
//            answer = -1;
//            return;
//        }
//        if(s1 == s2) {
//            if(answer > count) answer = count;
//            return;
//        }
//
//        if(s1 > s2) {
//            long num = queue1.poll();
//            queue2.offer(num);
//            dp(queue1, s1-num, queue2, s2+num, sum, count+1,max);
//        }else {
//            long num = queue2.poll();
//            queue1.offer(num);
//            dp(queue1, s1+num, queue2, s2-num, sum, count+1,max);
//        }
//    }

    public static int solution(int[] queue1, int[] queue2) {
        long sum = 0,s1=0,s2=0;
        Queue<Long> q1 = new LinkedList<>();
        Queue<Long> q2 = new LinkedList<>();
        for(int i=0;i<queue1.length;i++) {
            sum += queue1[i] + queue2[i];
            s1 += queue1[i];
            s2 += queue2[i];
            q1.offer((long)queue1[i]);
            q2.offer((long)queue2[i]);
        }
        if(sum %2 != 0){
            return -1;
        }
        int count = 0;
        while(count < q1.size()*3) {
            if(s1 == s2) break;

            if(s1 > s2) {
                long num = q1.poll();
                q2.offer(num);
                s1-=num;
                s2+= num;
            }else {
                long num = q2.poll();
                q1.offer(num);
                s1+=num;
                s2-=num;
            }
            count++;
        }

        //dp(q1, s1, q2, s2, sum, 0,q1.size()*3);

        return answer == -1 ? answer: count;
    }
    public static void main(String[] args) {
        System.out.print(solution(new int[] {101,100},new int[]{102,103}));
    }
}
