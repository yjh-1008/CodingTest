package DAY18.B11724;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    static ArrayList<ArrayList<Integer>> list = new ArrayList<>();
    static int answer=0;
    static boolean[] chk;
    public static void solution(int t, int s) {
        chk[t] = true;
        for(int i: list.get(t)) {
            if(!chk[i]){
                solution(i, s);
            }
        }

    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int v = Integer.parseInt(st.nextToken());
        chk = new boolean[n+1];
        for(int i=0;i<=n;i++) {
            list.add(new ArrayList<>());
        }

        for(int i=0;i<v;i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());

            list.get(s).add(e);
            list.get(e).add(s);
        }

        for(int i=1;i<=n;i++) {
            if(!chk[i]) {
                answer++;
                solution(i,i);
            }
        }
        System.out.print(answer);
    }
}
