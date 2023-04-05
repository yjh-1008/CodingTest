package DAY53.B2609;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static int gcd(int a, int b) {
        if(b > a) {
            int tmp = a;
            a = b;
            b = tmp;
        }
        if(b == 0) return a;
        return gcd(b, a%b);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        StringBuilder sb = new StringBuilder();
        int gcd = gcd(a,b);
        sb.append(gcd).append("\n").append((a/gcd) * (b/gcd) * gcd);
        System.out.print(sb);
    }
}
