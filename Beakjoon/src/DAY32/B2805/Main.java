package DAY32.B2805;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static long max = Long.MIN_VALUE;
    public static void binary_search(long[]arr, long l, long h, long m) {
        while(l<=h) {
            long middle= (l+h)/2;
            long sum = 0;
            for(int i=0;i<arr.length;i++) {
                if(arr[i]> middle)sum += arr[i]-middle;
            }

            if(sum < m) {
                h =middle-1;
                max = h;
            }else {
                l  = middle+1;
            }
        }

        System.out.print(max);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        long m = Long.parseLong(st.nextToken());
        st = new StringTokenizer(br.readLine());
        long[] arr = new long[n];
        long high =0;
        for(int i=0;i<n;i++) {
            arr[i] = Long.parseLong(st.nextToken());
            if(arr[i] > high) high = arr[i];
        }


        binary_search(arr, 0, high,m);
    }
}
