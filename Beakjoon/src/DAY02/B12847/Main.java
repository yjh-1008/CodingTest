package DAY02.B12847;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int N,k, arr[];
    static long answer;
    public static void solution() {
        long tmp=answer;
        for(int rt=k,lt=0;rt<N;rt++,lt++) {
            tmp -= arr[lt];
            tmp += arr[rt];
            answer = Math.max(answer, tmp);
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        arr = new int[N];
        for(int i=0;i<N;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }
        long sum=0;
        for(int i=0; i<k;i++){
            sum+=arr[i];
        }
        answer = sum;
        solution();
        System.out.println(answer);
    }

}
