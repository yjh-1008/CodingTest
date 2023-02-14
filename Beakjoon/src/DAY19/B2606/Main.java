package DAY19.B2606;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    static ArrayList<ArrayList<Integer>> list = new ArrayList<>();
    static boolean[] chk;
    static int answer=0;
    public static void dfs(int s) {
        for(Integer li: list.get(s)) {
            if(!chk[li]) {
                answer+=1;
                chk[li] = true;
                dfs(li);
            }
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int v = Integer.parseInt(br.readLine());
        int n = Integer.parseInt(br.readLine());
        chk = new boolean[v+1];
        for(int i=0;i<=v;i++) {
            list.add(new ArrayList<>());
        }

        for(int i=0;i<n;i++) {
            String[] str = br.readLine().split(" ");
            int s = Integer.parseInt(str[0]);
            int e = Integer.parseInt(str[1]);

            list.get(s).add(e);
            list.get(e).add(s);
        }
        chk[1] = true;
        dfs(1);
        System.out.print(answer);
    }
}
