package DAY02.억억단을외우자;

import java.util.*;

public class Solution {
    static ArrayList<Integer> arr = new ArrayList<>();
    static public class Node {
        int n, c;
        public Node(int n, int c) {
            this.n = n;
            this.c = c;
        }
    }
    static public Node[] dp;


    static public void measure(int n) {
       for(int i=1;i<=n;i++) {
           for(int j=1;j<=n/i;j++){
               dp[i*j-1].c++;
           }
       }
        Arrays.sort(dp, new Comparator<Node>() {
            @Override
            public int compare(Node o1, Node o2) {
                if (o1.c < o2.c) return 1;
                else if (o1.c > o2.c) return -1;
                else {
                    if (o1.n > o2.n) return 1;
                    else if (o1.n < o2.n) return -1;
                    else return 0;
                }
            }
        });
    }
    public static int getMaxCount(int start, int end) {
        int maxCount = 0;
        int maxIdx = 0;
        for(int i = 0; i < end ; i++){
            if(dp[i].n >= start) {
                maxIdx = dp[i].n;
                break;
            }
        }
        return maxIdx;
    }
    static public int[] solution(int e, int[] starts) {
        dp = new Node[e];

        for (int i = 1; i <= e; i++) {
            dp[i - 1] = new Node(i, 1);
        }
        //등장하는 횟수를 구한다. 약수의 갯수.
        measure(e);
        int[] answer = new int[starts.length];
        for(int i=0;i< answer.length;i++) {
            answer[i] = getMaxCount(starts[i],e);
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(Arrays.toString(solution(8,new int[]{1,3,7})));
    }
}
