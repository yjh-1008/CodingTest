package DAY07.미로탈출;

import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    static class Point {
        int x;
        int y;
        int count;
        Point(int x, int y,int count) {
            this.x = x;
            this.y = y;
            this.count = count;
        }
    }

    static int n,m;
    static Point s, l;
    static int toX[] = {0,0,-1,1}, toY[] = {1,-1,0,0};
    static boolean chk[][];
    static Queue<Point> q;
    public static int bfs(String[][] arr,String end,int x, int y) {
        q = new LinkedList<>();
        q.offer(new Point(x,y,0));
        chk = new boolean[n][m];
        chk[x][y] = true;
        while(!q.isEmpty()) {
            Point p = q.poll();
            for(int i=0; i<4; i++) {
                int mx = p.x+toX[i];
                int my = p.y+toY[i];
                if(mx < 0 || mx >= n || my<0 || my>=m) continue;
                if(arr[mx][my].equals("X") || chk[mx][my]) continue;
                if(arr[mx][my].equals(end)) return p.count+1;
                chk[mx][my] = true;
                q.offer(new Point(mx, my,p.count+1));
            }
        }
        return -1;
    }

    public static int solution(String[] maps) {
        int answer = 0;
        n = maps.length;
        m = maps[0].length();
        String[][] arr = new String[n][m];
        for(int i=0; i<n; i++) {
            String[] tmp = maps[i].split("");
            for(int j=0;j<m;j++) {
                String t = tmp[j];
                arr[i][j] = t;
                if(t.equals("S")) s = new Point(i,j,0);
                else if(t.equals("L")) l = new Point(i,j,0);
            }
        }

        int a=bfs(arr,"L",s.x,s.y);
        int b = bfs(arr,"E",l.x,l.y);
        return a==-1 || b==-1 ? -1: a+b;
    }

    public static void main(String[] args) {
        String[] maps = {"SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"};
        System.out.print(solution(maps));
    }
}
