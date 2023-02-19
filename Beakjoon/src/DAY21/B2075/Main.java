package DAY21.B2075;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int n = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int arr[][] = new int[n][n];
        for(int i=0;i<n;i++) {
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<n;j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                if(pq.size()==n) {
                    if(pq.peek() < arr[i][j]) {
                        pq.poll();
                        pq.offer(arr[i][j]);
                    }
                }else{
                    pq.offer(arr[i][j]);
                }

            }
        }

        System.out.println(pq.poll());

    }
}
