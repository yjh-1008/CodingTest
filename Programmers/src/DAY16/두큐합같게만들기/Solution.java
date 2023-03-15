package DAY16.두큐합같게만들기;

import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public static int solution(int[] queue1, int[] queue2) {
        long sum = 0,s1=0,s2=0;
        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();
        for(int i=0;i<queue1.length;i++) {
            s1 += queue1[i];
            q1.offer(queue1[i]);
        }
        for(int i=0;i<queue2.length;i++) {
            s2 += queue2[i];
            q2.offer(queue2[i]);
        }
        sum = s1+s2;
        if(sum %2 != 0){
            return -1;
        }
        int count = 0;
        while(s1 != s2) {
            count++;
            if(s1 > s2) {
                int num = q1.poll();
                s1-=num;
                s2+= num;
                q2.offer(num);

            }else {
                int num = q2.poll();
                s1+=num;
                s2-=num;
                q1.offer(num);

            }


            if(count > (queue1.length+queue2.length)*2) return -1;
        }



        return count;
    }
    public static void main(String[] args) {
        System.out.print(solution(new int[] {101,100},new int[]{102,103}));
    }
}
