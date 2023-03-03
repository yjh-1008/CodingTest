package DAY33.B1654;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void binary_search(long[] arr, long l, long h,long k) {
        while(l<=h) {
            long middle = (l+h)/2;
            int div = 0;
            for(long a: arr) {
                div += a/middle;
            }
            if(div >=k) {
                l = middle+1;

            }else {
                h = middle -1;
            }
        }
        System.out.println(h);
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        long k = Long.parseLong(st.nextToken());
        long arr[] = new long[n];

        long max = -1;
        for(int i=0;i<n;i++) {
            arr[i] = Long.parseLong(br.readLine());
            if(arr[i] > max) max = arr[i];
        }

        binary_search(arr, 1, max,k);
    }
}
