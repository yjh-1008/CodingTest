package DAY20.B7576;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static class Node {
        int x;
        int y;
        int day;
        Node(int x, int y,int day) {
            this.x=x;
            this.y = y;
            this.day = day;
        }
    }
    static Queue<Node> q = new LinkedList<>();
    static int arr[][];
    static int toX[]={0,0,-1,1}, toY[] = {1,-1,0,0};
    static boolean chk[][];
    static int m,n,answer=0,area,ac=0;
    public static void bfs() {
        int day=0;
        while(!q.isEmpty()) {
            Node node  = q.poll();
            for(int i=0;i<4;i++) {
                int mx = node.x+toX[i];
                int my = node.y+toY[i];
                if(mx <0 || mx >= n || my<0 || my>=m) continue;
                if(chk[mx][my]) continue;
                if(arr[mx][my] != 0) continue;
                chk[mx][my] = true;
                day = Math.max(day, node.day+1);
                q.offer(new Node(mx,my, node.day+1));
                ac++;
            }
        }
        System.out.print(ac==area? day:-1);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        m = Integer.parseInt(st.nextToken());
        n = Integer.parseInt(st.nextToken());
        arr = new int [n][m];
        chk = new boolean[n][m];
        int count =0;
        for(int i=0; i<n; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<m;j++) {
                int tomato = Integer.parseInt(st.nextToken());
                if(tomato == -1) {
                    count+=1;
                    chk[i][j] = true;
                } else if(tomato == 1) {
                    ac++;
                    chk[i][j] = true;
                    q.offer(new Node(i,j,0));
                }
                arr[i][j] = tomato;
            }
        }
        area = m*n -count;
        bfs();
    }
}
