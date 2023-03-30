package DAY50.B1837;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        BigInteger N = new BigInteger(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        boolean arr[] = new boolean[K+1];
        arr[0] = true;
        arr[1] = true;

        for(int i=2;i<=K;i++) {
            if(arr[i]) continue;
            for(int j=i+i;j<=K;j+=i) {
                arr[j] = true;
            }
        }

        boolean chk = true;
        for(int i=2;i<K;i++) {
            if(arr[i]) continue;
            BigInteger I = new BigInteger(Integer.toString(i));
            if(N.mod(I).compareTo(BigInteger.ZERO) == 0) {
                chk = false;
                System.out.println("BAD "+I);
                break;
            }
        }
        if(chk) System.out.print("GOOD");
    }
}
