package DAY36.B20438;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        int q = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        boolean arr[] = new boolean[n+3];
        boolean sl[] = new boolean[n+3];
        int[] dp = new int[n+3];
        for(int i=3; i<= n+2; i++) {
            dp[i] = i;
        }
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<k;i++) {
            sl[Integer.parseInt(st.nextToken())] = true;
        }

        st = new StringTokenizer(br.readLine());
        for(int i=0;i<q;i++){
            //if(!st.hasMoreTokens()) break;
            int idx =Integer.parseInt(st.nextToken());
            if(sl[idx]) continue;
            int add = idx;
            while(idx<= n+2) {
                if(sl[idx]){
                    idx +=add;
                    continue;
                }
                arr[idx] = true;
                idx+=add;
            }
        }

        for(int i=3; i<= n+2; i++) {
            int unAttend = (!arr[i])?1:0;//출석 되지 않은 학생 수 dp에 계산
            dp[i] = dp[i -1] + unAttend;
        }


        for(int i=0;i<m;i++) {
            int answer=0;
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            for(int j=s;j<=e;j++) {
                if(!arr[j]) answer++;
            }
            sb.append(answer).append("\n");
        }

        System.out.print(sb);
    }
}
