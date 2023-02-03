package DAY12.B2002;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n;
        n = Integer.parseInt(st.nextToken());
        Map<String, Integer> map = new HashMap<>();
        for(int i=0; i<n; i++) {
            map.put(br.readLine(),i);
        }
        int answer=0;
        int arr[] = new int[n];
        for(int i=0;i<n;i++) {
            arr[i] = map.get(br.readLine());
        }

        for(int i=0;i<n-1;i++) {
            for(int j=i+1;j<n;j++) {
                if(arr[i]> arr[j]) {
                    answer++;
                    break;
                }
            }
        }

        System.out.println(answer);
    }
}
