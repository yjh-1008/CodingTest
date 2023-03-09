package DAY38.B2015;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Main {
    public static long prefix_sum(int[] arr, int[] sum, int k, int n,long count) {

        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0,1);

        for(int i=1; i<=n; i++){
            //if(sum[i]-k == 0) count+=1;
            count+=map.getOrDefault(sum[i]-k, 0);
            map.put(sum[i],map.getOrDefault(sum[i],0)+1);
        }

        return count;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        int arr[] = new int[n+1];
        int sum[] = new int[n+1];
        st= new StringTokenizer(br.readLine());
        int count = 0;
        for(int i=1;i<=n;i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            sum[i] = arr[i] + sum[i-1];
         }

        long answer = prefix_sum(arr, sum,k,n,count);
        System.out.print(answer);
    }
}
