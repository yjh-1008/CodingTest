package DAY18.B10451;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static int count =0;
    public static void dfs(ArrayList<Integer> list,int v,  boolean[] chk,int s) {
        chk[list.get(v)] = true;
        if(s == list.get(v)) count++;
        else dfs(list, list.get(v), chk, s);

    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();
        int t = Integer.parseInt(br.readLine());
        ArrayList<Integer> list;
        boolean chk[] = new boolean[10001];
        for(int i=0;i<t;i++) {
            int n = Integer.parseInt(br.readLine());
            list = new ArrayList<>();
            list.add(0);
            Arrays.fill(chk, false);
            st = new StringTokenizer(br.readLine());

            for(int j=1; j<=n; j++) {
                list.add(Integer.parseInt(st.nextToken()));
            }
            count=0;
            for(int j=1;j<=n;j++) {
                if(!chk[list.get(j)]) dfs(list,j, chk, j);
            }
            sb.append(count).append("\n");
        }
        System.out.print(sb);
    }
}
