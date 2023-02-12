package DAY17.B2178;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int toX[]={0,0,-1,1}, toY[]={1,-1,0,0};
    static int answer = Integer.MAX_VALUE;
    static class Node {
        int x,y;
        Node(int x, int y) {
            this.x=x;
            this.y=y;
        }
    }
    static boolean chk[][];
    public static void bfs(int[][] arr, int s, int e,int n,int m) {
        chk[s][e] = true;
        Queue<Node> q= new LinkedList<>();
        int count =1;
        q.offer(new Node(s,e));
        while(!q.isEmpty()) {
            Node node = q.poll();
            for(int i=0;i<4;i++) {
                int mx = node.x+toX[i];
                int my = node.y+toY[i];
                if(mx >= 0 && mx < n && my>=0 && my<m) {
                    if(arr[mx][my]!=0 && !chk[mx][my]){
                        q.offer(new Node(mx,my));
                        arr[mx][my] = arr[node.x][node.y]+1;
                        chk[mx][my] = true;
                    }
                }
            }
        }
        System.out.print(arr[n-1][m-1]);
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int[][] arr = new int[n][m];

        for(int i=0;i<n;i++) {
            String str[] = br.readLine().split("");
           for(int j=0;j<m;j++){
               arr[i][j] = Integer.parseInt(str[j]);
           }
        }

        chk = new boolean[n][m];
        bfs(arr,0,0,n,m);
    }
}
