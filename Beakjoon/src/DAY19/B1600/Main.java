package DAY19.B1600;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    static int toX[]={0,0,-1,1}, toY[] = {1,-1,0,0}, toHX[]={-1,1,2,2,1,-1,-2,-2}, toHY[] = {2,2,1,-1,-2,-2,-1,1};
    static int answer = Integer.MAX_VALUE;
    static int k, w, h;
    static String arr[][];
    static boolean chk[][][];
    static class Point {
        int x,y;
        int horseCount;
        int totalCount;
        Point(int x,int  y,int horseCount, int totalCount ) {
            this.x = x;
            this.y = y;
            this.horseCount = horseCount;
            this.totalCount = totalCount;
        }
    }
    public static void bfs(int s, int e) {
        Queue<Point> q =new LinkedList<>();
        q.offer(new Point(s,e,0,0));
        int mx,my;
        while(!q.isEmpty()) {
            Point p = q.poll();
            if((p.x==h-1 && p.y==w-1)) {
                answer = Math.min(answer, p.totalCount);
                break;
            }

            if(p.horseCount < k) {
                for(int i=0; i<8;i++) {
                    mx = p.x + toHX[i];
                    my = p.y + toHY[i];
                    if((mx >= 0 && mx <h && my>=0 && my< w) && arr[mx][my].equals("0")){
                        if(!chk[mx][my][p.horseCount+1]) {
                            chk[mx][my][p.horseCount+1] = true;
                            q.offer(new Point(mx, my, p.horseCount+1, p.totalCount+1));
                        }
                    }
                }
            }

            for(int i=0; i<4;i++) {
                mx = p.x + toX[i];
                my = p.y + toY[i];

                if((mx >= 0 && mx <h && my>=0 && my< w) && arr[mx][my].equals("0")) {
                    if(!chk[mx][my][p.horseCount]){
                        chk[mx][my][p.horseCount] = true;
                        q.offer(new Point(mx, my, p.horseCount, p.totalCount+1));
                    }

                }
            }


        }
        System.out.println(answer == Integer.MAX_VALUE ? -1 : answer);
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        k = Integer.parseInt(br.readLine());
        String tmp[] = br.readLine().split(" ");
        w = Integer.parseInt(tmp[0]);
        h = Integer.parseInt(tmp[1]);

        arr = new String[h][w];
        chk = new boolean[h][w][k+1];
        for(int i=0;i<h;i++) {
            tmp = br.readLine().split(" ");
            for(int j=0;j<w;j++) {
                arr[i][j] = tmp[j];
            }
        }
        chk[0][0][0] = true;
        chk[0][0][1] = true;
        bfs(0,0);

    }
}
