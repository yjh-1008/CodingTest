package DAY34.B1300;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long n = Integer.parseInt(br.readLine());
        long k = Integer.parseInt(br.readLine());

        long l=1;
        long h = k;
        while(l<h) {
            long mid = (l+h)/2;
            long count = 0;
            for(int i=1;i<=n;i++) {
                //if(mid/i == 0) break;
                count += Math.min(mid/i,n);
            }
            if(count < k) {
                l = mid +1;
            }else {
                h = mid;
            }
        }
        System.out.println(l);
    }
}
