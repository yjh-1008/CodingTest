package DAY01.B2203;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int N, M,arr[];
    public static int solution() {
        int answer=0,sum=0,lt=0, rt=0;
        while(lt < N) {
            if( sum > M || rt == N) {
                sum -= arr[lt++];
            } else {
                sum+=arr[rt++];
            }

            if(sum == M) answer++;
        }
        return answer;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        arr = new int[N];
        st = new StringTokenizer(br.readLine());
        for(int i = 0;i<N;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }
        System.out.print(solution());
    }
}
