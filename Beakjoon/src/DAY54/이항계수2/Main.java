package DAY54.이항계수2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        long answer = facto(n)/(facto(k) * facto(n-k));
        System.out.print(answer%10007);
    }

    public static long facto(int num) {
        long sum=1;
        for(int i=1;i<=num;i++) {
            sum*=i;
        }
        return sum;
    }
}
