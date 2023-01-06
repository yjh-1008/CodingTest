package DAY02.수열;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class Main {
    static int N,k, arr[], answer=0,sum=0;
    public static void solution() {
        int lt=0, rt=k;
        while(rt < N) {
            sum -= arr[lt++];
            sum += arr[rt++];
            answer = Math.max(sum, answer);
        }
    }


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        arr = new int[N];
        k = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<N;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }
        for(int i=0;i<k;i++) {
            sum+= arr[i];
        }
        answer=sum;
        solution();
        System.out.println(answer);
    }
}
