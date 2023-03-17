package DAY40.B10974;

import java.io.BufferedReader;
import java.util.Scanner;

public class Main {
    static StringBuilder sb = new StringBuilder();
    public static void dp(int[] arr, int n, int count, boolean[] visited,int idx) {
        if(count == n) {
            for(int i=0;i<n;i++){
                sb.append(arr[i]).append(" ");
            }
            sb.append("\n");
            return;
        }

        for(int i=1;i<=n;i++) {
            if(visited[i]) continue;
            visited[i] = true;
            arr[idx] = i;
            dp(arr, n, count+1,visited,idx+1);
            visited[i] = false;
            arr[idx] = 0;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        boolean visited[] = new boolean[n+1];
        dp(arr, n, 0, visited,0);
        System.out.print(sb);
    }
}
