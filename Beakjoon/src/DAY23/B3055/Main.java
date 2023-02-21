package DAY23.B3055;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static class Point {
        int r;
        int c;
        int count;
        String type;

        public Point(int r, int c, int count, String type) {
            this.r = r;
            this.c = c;
            this.count = count;
            this.type = type;
        }
    }

    public static void bfs(String[][] map, boolean chk[][], Queue<Point> q) {
        int toR[] = {0, 0, -1, 1}, toC[] = {1, -1, 0, 0};
        int answer = -1;
        while (!q.isEmpty()) {
            Point p = q.poll();
            if (map[p.r][p.c].equals("D")) {
                answer = p.count;
                break;
            }

            for (int i = 0; i < 4; i++) {
                int mr = p.r + toR[i];
                int mc = p.c + toC[i];
                if (p.type.equals("S")) {
                    if (mr < 0 || mr >= map.length || mc < 0 || mc >= map[0].length) continue;
                    if (map[mr][mc].equals("X") || map[mr][mc].equals("*")) continue;
                    if (chk[mr][mc]) continue;

                    chk[mr][mc] = true;
                    q.offer(new Point(mr, mc, p.count + 1, "S"));
                } else if (p.type.equals("*")) {
                    if (mr < 0 || mr >= map.length || mc < 0 || mc >= map[0].length) continue;
                    if (map[mr][mc].equals("D") || map[mr][mc].equals("X")) continue;
                    if(chk[mr][mc]) continue;
                    map[mr][mc] = "*";
                    chk[mr][mc] = true;
                    q.offer(new Point(mr, mc, 0, "*"));
                }
            }
        }
        System.out.print(answer == -1 ? "KAKTUS" : answer);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int r = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());
        Queue<Point> q = new LinkedList<>();
        String[][] map = new String[r][c];
        boolean[][] chk = new boolean[r][c];
        Point start = null;
        for (int i = 0; i < r; i++) {
            String[] tmp = br.readLine().split("");
            for (int j = 0; j < c; j++) {
                map[i][j] = tmp[j];
            }
        }
        Point sPoint = null;
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                if(map[i][j].equals("*")){
                    q.offer(new Point(i,j,0,"*"));
                    chk[i][j] = true;
                }else if(map[i][j].equals("S")){
                    sPoint = new Point(i,j,0,"S");
                    chk[i][j] = true;
                }else if(map[i][j].equals("X")) chk[i][j] = true;
            }
        }
        q.offer(sPoint);
        bfs(map, chk, q);
    }
}
