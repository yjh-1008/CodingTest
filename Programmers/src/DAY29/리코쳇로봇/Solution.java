package DAY29.리코쳇로봇;

import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    static int n,m;
    static int[] toX={0,0,-1,1}, toY= {1,-1,0,0};
    static class Point {
        int x;
        int y;
        int mc;
        public Point(int x, int y, int mc) {
            this.x = x;
            this.y = y;
            this.mc = mc;
        }
    }

    public static int solution(String[] board) {
        //.은 빈공간, R은 로봇의 처음 위치, D는 장애물, G는 목표지점
        int answer = 0;
        n = board.length;
        m = board[0].length();
        Queue<Point> q = new LinkedList<>();
        String[][] map = new String[n][m];
        boolean[][] visited = new boolean[n][m];
        for(int i=0;i<n;i++){
            String[] tmp = board[i].split("");
            for(int j=0;j<m;j++) {
                if(tmp[j].equals("R")) {
                    q.offer(new Point(i,j,0));
                    visited[i][j] = true;
                }
                map[i][j] = tmp[j];
            }
        }

        while(!q.isEmpty()) {
            Point p = q.poll();

            if(map[p.x][p.y].equals("G")){
                answer = p.mc;
                break;
            }
            for(int i=0;i<4;i++) {
                int mx = p.x+toX[i];
                int my = p.y + toY[i];
                int mc = p.mc;
                while(true) {
                    if(mx < 0 || mx>=n || my<0 || my>=m) break;
                    if(map[mx][my].equals("D")) break;
                    mx += toX[i];
                    my += toY[i];
                }
                mx -= toX[i];
                my -= toY[i];
                if(visited[mx][my]) continue;
                visited[mx][my] = true;
                q.offer(new Point(mx, my, mc+1));
            }
        }

        return answer == 0 ? -1 : answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(
                new String[]
                        {".D.R", "....", ".G..", "...D"}
        ));
    }
}
