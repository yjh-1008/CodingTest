package DAY27.B1759;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static StringBuilder sb = new StringBuilder();
    public static void dfs(String[] arr, boolean[] chk, int l, int idx, int count,String str) {
        chk[idx] = true;
        count++;
        if(count == l) {
            boolean cg= false;
            int cgCount = 0;
            for(char c: str.toCharArray()) {
                if(c == 'a' || c=='e' || c=='i' || c=='o' || c=='u') {
                    cg = true;
                    cgCount +=1;
                }
            }

            if(cg && l-cgCount >= 2) sb.append(str).append("\n");
        }
        for(int i=idx+1;i<arr.length;i++) {
            if(chk[i]) continue;
            dfs(arr, chk, l, i, count, str+arr[i]);
        }
        chk[idx] = false;
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int l = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());
        String[] arr = new String[c];
        boolean[] chk = new boolean[c];
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<c;i++){
            arr[i] = st.nextToken();
        }
        Arrays.sort(arr);
        for(int i=0;i<=c-l;i++) {
            dfs(arr, chk, l, i, 0,arr[i]);
        }

        System.out.print(sb);
    }
}
