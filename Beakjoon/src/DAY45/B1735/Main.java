package DAY45.B1735;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static int gcd(int a, int b) {
        if(b == 0) return a;
        else return gcd(b, a%b);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();
        st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        int c = Integer.parseInt(st.nextToken());
        int d = Integer.parseInt(st.nextToken());
        int mol = a*d + b*c;
        int den = b*d;
        int result =gcd(Math.max(mol,den), Math.min(mol,den));
        sb.append(mol/result).append(" ").append(den/result);

        System.out.print(sb);
    }
}
