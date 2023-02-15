package DAY03.게임맵최단거리;

import java.util.*;
class Solution {
    static int answer = Integer.MAX_VALUE;
    static int toX[]= {0,0,-1,1}, toY[]={1,-1,0,0},n,m;
    static boolean[][] chk;
    class Point{
        int x;
        int y;
        Point(int x, int y){
            this.x = x;
            this.y = y;
        }
    }

    public void bfs(int x, int y, int[][] maps) {
        Queue<Point> q = new LinkedList<>();
        q.offer(new Point(x, y));
        chk[x][y] = true;

        while(!q.isEmpty()) {
            Point p = q.poll();
            for(int i=0;i<4;i++){
                int mx = p.x + toX[i];
                int my = p.y + toY[i];
                if(mx < 0 || mx >= n || my<0 || my>=m) continue;
                if(chk[mx][my]) continue;
                if(maps[mx][my] == 0) continue;
                chk[mx][my] = true;
                q.offer(new Point(mx, my));
                maps[mx][my] = maps[p.x][p.y]+1;
            }
        }
    }

    public int solution(int[][] maps) {
        n = maps.length;
        m = maps[0].length;
        chk = new boolean[n][m];
        bfs(0,0, maps);
        answer = maps[n-1][m-1];
        return answer == 1 ? -1 : answer;
    }
}