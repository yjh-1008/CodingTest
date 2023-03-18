package DAY42.B1182;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static int answer = 0;
    public static void dp(int[] arr, int count, int sum, boolean[] visited,int n, int k) {
        if(sum == k) {
            answer+=1;
            return;
        }

        if(count == n-1) return;

        dp(arr, count+1, sum+arr[count], visited, n, k);
        dp(arr, count+1, sum, visited, n, k);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        int arr[] = new int[n];
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<n;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }
        boolean [] visited = new boolean[n];
        dp(arr, 0, 0,visited, n,k);
        System.out.print(k==0 ? answer-1:answer);
    }
}
