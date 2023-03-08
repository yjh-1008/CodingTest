package DAY37.B21318;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        int piano[] = new int[n+1];
        int sum[] = new int[n+1];
        st = new StringTokenizer(br.readLine());
        for(int i=1;i<=n;i++) {
            piano[i] = Integer.parseInt(st.nextToken());
        }

        for(int i=2;i<=n;i++) {
            if(piano[i] < piano[i-1]) {
                sum[i] = sum[i-1]+1;
            }else {
                sum[i] = sum[i-1];
            }
        }
        int k= Integer.parseInt(br.readLine());
        for(int i=0;i<k;i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            sb.append(sum[e]-sum[s]).append("\n");
        }
        System.out.print(sb);
    }
}
