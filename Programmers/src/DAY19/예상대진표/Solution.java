package DAY19.예상대진표;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Solution {
    static class User {
        int no;
        int idx;

        public User(int no, int idx) {
            this.no = no;
            this.idx = idx;
        }
    }

    public static int solution(int n, int a, int b) {
        int answer = 1;
        Queue<User> users = new LinkedList<>();
        for(int i=1;i<=n;i++) {
            users.offer(new User(i,i));
        }
        int count = 0;
        while(true) {
            User user1 = users.poll();
            User user2 = users.poll();
            if(user1.idx == a && user2.idx == b) break;
            if(user1.idx == b && user2.idx == a) break;
            if(user1.idx == a || user1.idx == b) {
                int no = user1.no %2 ==0 ?  user1.no/2 : (user1.no+1)/2;
                users.offer(new User(no, user1.idx));
            }else if(user2.idx == a || user2.idx == b) {
                int no = user1.no %2 ==0 ?  user1.no/2 : (user1.no+1)/2;
                users.offer(new User(no, user2.idx));
            } else {
                int no = user1.no %2 ==0 ?  user1.no/2 : (user1.no+1)/2;
                users.offer(new User(no, user1.idx));
            }
            count++;
            //라운드 증가
            if(count == n/2) {
                count = 0;
                answer+=1;
                n = n/2;
            }
        }
        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution(8,5,8));
    }
}
