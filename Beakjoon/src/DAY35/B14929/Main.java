package DAY35.B14929;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.StringTokenizer;

public class Main {
    static int getSum(int l, int r, int [] sum) {
        return sum[r] - sum[l-1];
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int arr[] = new int[n+1];
        int sum[] = new int[n+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i=1;i<=n;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            sum[i] = arr[i] + sum[i-1];
        }
        long answer= 0;

        for(int i=1;i<n;i++) {
            int v = getSum(i+1, n, sum);
            answer += v*arr[i];

        }

        System.out.print(answer);
    }
}
