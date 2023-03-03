package DAY33.B2110;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static int distance(long[] arr, long middle) {
        int count = 1;
        long lastVisited = arr[0];

        for(int i=1;i<arr.length;i++) {
            if(arr[i]-lastVisited >= middle) {
                count += 1;
                lastVisited = arr[i];
            }
        }

        return count;
    }
    public static void binary_search(long[] arr, long l, long h,int c) {
        while(l<=h) {
            long middle = (l+h)/2;
            if(distance(arr, middle) < c) {
                h = middle-1;
            }else {
                l = middle+1;
            }
        }
        System.out.println(l-1);
    }



    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        long arr[] = new long[n];
        long max = Integer.MIN_VALUE;
        for(int i=0;i<n;i++) {
            arr[i] = Long.parseLong(br.readLine());
        }
        Arrays.sort(arr);
        max = arr[arr.length-1]-arr[0]+1;
        binary_search(arr, 1, max,c);
    }
}
