package DAY46.B14476;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static int gcd(int a, int b) {
        if(b==0) return a;
        else return gcd(b, a%b);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n+1];
        int[] gcd1 = new int[n];
        int[] gcd2 = new int[n];
        int a,b;
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<n;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        gcd1[0] = arr[0];

        for(int i=1;i<n;i++) {
            a = Math.max(gcd1[i-1], arr[i]);
            b = Math.min(gcd1[i-1], arr[i]);
            gcd1[i] = gcd(a,b);
        }

        gcd2[n-1] = arr[n-1];

        for(int i=n-2;i>=1;i--) {
            a = Math.max(gcd2[i+1], arr[i]);
            b = Math.min(gcd2[i+1], arr[i]);
            gcd2[i] = gcd(a,b);
        }

        int remove = 0;
        int answer = 0;
        for(int i=0;i<n;i++){

            int result;
            if(i==0) {
                result = gcd2[1];
            }else if(i==n-1){
                result = gcd1[n-2];
            }else {
                result = gcd(Math.max(gcd1[i-1],gcd2[i+1]), Math.min(gcd1[i-1], gcd2[i+1]));
            }

            if(arr[i]%result != 0) {
                if(result > answer) {
                    remove = arr[i];
                    answer = result;
                }
            }
        }

        if(answer == 0) System.out.println(-1);
        else System.out.println(answer+" "+remove);
    }
}
