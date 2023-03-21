package DAY44.B1717;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    static int arr[];
    public static void union(int x, int y) {
        x = find(x);
        y = find(y);
        if(x == y) return;
        arr[x] = y;
    }
    public static int find(int x) {
        if(x == arr[x]) return x;
        return arr[x] = find( arr[x]);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        arr = new int[n+1];
        for(int i=0;i<=n;i++) {
            arr[i]= i;
        }

        for(int i=0;i<m;i++) {
            st = new StringTokenizer(br.readLine());
            int cmd = Integer.parseInt(st.nextToken());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            switch(cmd) {
                case 0:
                    union(x,y);
                    break;
                case 1:
                    int result1= find( x);
                    int result2 = find( y);
                    if(result1 == result2) System.out.println("YES");
                    else System.out.println("NO");
                    break;
            }
        }
    }
}
