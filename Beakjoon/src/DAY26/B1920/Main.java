package DAY26.B1920;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static boolean binarySearch(int[]arr, int n, int s, int e) {
        int middle;
       while(s<=e) {
           middle = (s+e)/2;
           if(n == arr[middle]) return true;
           else if(n > arr[middle]) s = middle+1;
           else e =  middle-1;
       }
        return false;
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<n;i++) {
            arr[i] =  Integer.parseInt(st.nextToken());
        }
        Arrays.sort(arr);
        int k = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<k;i++) {
            int num = Integer.parseInt(st.nextToken());
            if(binarySearch(arr, num,0,arr.length-1)) sb.append(1).append("\n");
            else sb.append(0).append("\n");
        }

        System.out.print(sb);
    }
}
