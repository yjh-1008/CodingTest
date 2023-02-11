package DAY16.B1260;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static ArrayList<ArrayList<Integer>> list = new ArrayList<>();
    static StringBuilder sb = new StringBuilder();
    static boolean[] visited;

    public static void dfs(int v) {
        visited[v] = true;
        sb.append(v+" ");
        for(int n: list.get(v)) {
            if(!visited[n]) {
                dfs(n);
            }
        }
    }

    public static void bfs(int v){
        Queue<Integer> q = new LinkedList<>();
        q.offer(v);
        sb.append(v+" ");
        visited[v] = true;
        while(!q.isEmpty()) {
            int num = q.poll();
            for(int n: list.get(num)){
                if(!visited[n]){
                    visited[n] = true;
                    q.offer(n);
                    sb.append(n+" ");
                }
            }
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int v = Integer.parseInt(st.nextToken());
        visited = new boolean[n+1];
        for(int i=0; i<=n; i++) {
            list.add(new ArrayList<>());
        }


        for(int i=1; i<=m; i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());

            list.get(s).add(e);
            list.get(e).add(s);
        }

        for(int i=0; i<=n; i++) {
            Collections.sort(list.get(i));
        }
        dfs(v);
        System.out.println(sb);
        visited= new boolean[n+1];
        sb = new StringBuilder();
        bfs(v);
        System.out.print(sb);
    }
}
