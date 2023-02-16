package DAY05.숫자변환하기;

import java.util.*;
class Solution {
    static int arr[] = new int[1000001];
    static int answer = Integer.MAX_VALUE;
    class Point {
        int sum;
        int count;
        Point(int sum, int count ){
            this.sum = sum;
            this.count = count;
        }
    }
    public void bfs(int x, int y, int n, int count, int sum) {
        Queue<Point> q = new LinkedList<>();
        q.offer(new Point(sum, 0));
        while(!q.isEmpty()) {
            Point p = q.poll();
            if(p.sum == y) {
                answer = Math.min(answer, p.count);
            }
            int tmp[] = new int[3];
            tmp[0] = p.sum+n;
            tmp[1] = p.sum*2;
            tmp[2] = p.sum*3;
            for(int i=0;i<3;i++) {
                if(tmp[i] > y) continue;
                if(arr[tmp[i]] == 0 || arr[tmp[i]] > p.count+1) {
                    arr[tmp[i]] = p.count+1;
                    q.offer(new Point(tmp[i], p.count+1));
                }
            }
        }

    }
    public int solution(int x, int y, int n) {
        bfs(x, y, n, 0, x);
        return answer == Integer.MAX_VALUE ? -1 : answer;
    }
}