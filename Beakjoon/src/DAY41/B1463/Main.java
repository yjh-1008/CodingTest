package DAY41.B1463;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static int answer = Integer.MAX_VALUE;
    static int[] arr = new int[1000000];


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        arr =  new int[n+1];
        arr[1] =1;
        arr[2] = 1;
        arr[3] = 1;
        for(int i=4;i<=n;i++) {
            arr[i] =  arr[i-1]+1;
            if(i%2 == 0) arr[i] = Math.min(arr[i],arr[i/2]+1);
            if(i%3 == 0) arr[i] = Math.min(arr[i],arr[i/3]+1);
         }

        System.out.println(arr[n]);
    }
}
