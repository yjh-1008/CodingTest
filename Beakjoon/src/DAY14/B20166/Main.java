package DAY14.B20166;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class Main {
    static int toX[] = {-1,0,1,1,1,0,-1,-1}, toY [] = {1,1,1,0,-1,-1,-1,0},n,m,k, MAX_LEN=0;
    static Map<String, Integer> answers = new HashMap<>();
    static String arr[][];
    public static void solution(int x, int y,String chk) {
        chk +=  arr[x][y];
        if(MAX_LEN == chk.length()) {
            if(answers.containsKey(chk)) {
                answers.put(chk, answers.get(chk)+1);
            }
            return;
        }

        for(int i=0;i<8;i++) {
            int mx = x+toX[i];
            int my = y+toY[i];

            if(mx < 0) {
                mx = n-1;
            } else if(mx >= n) {
                mx = 0;
            }

            if(my < 0) {
                my = m-1;
            } else if(my >= m) {
                my = 0;
            }
            solution(mx, my, chk);
        }

    }


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        String str;
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());
        arr= new String[n][m];

        for(int i=0;i<n;i++) {
            String tmp[] = br.readLine().split("");
            for(int j=0;j<m;j++){
                arr[i][j] = tmp[j];
            }
        }

        for(int i=0;i<k;i++) {
            String input = br.readLine();
            answers.put(input, 0);
            MAX_LEN = Math.max(input.length(), MAX_LEN);
        }

        for(int j=0; j<n;j++) {
            for(int t=0;t<m;t++){
                solution(j,t, "");
            }
        }

        for(int count: answers.values()) {
            sb.append(count+"\n");
        }
        System.out.print(sb);
    }
}
