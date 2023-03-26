package DAY48.골드바흐의추측;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static String wrongAnswer = "Goldbach's conjecture is wrong";
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int n;
        boolean arr[] = new boolean[10000001];
        arr[0] = true;
        arr[1] = true;

        for(int i=2;i<=1000000;i++) {
            if(!arr[i]) {
                for(int j=i+i;j<=1000000;j+=i) {
                    arr[j] = true;
                }
            }
        }
        boolean chk;
        //System.out.println(arr[4]);
        while(true) {
            n = Integer.parseInt(br.readLine());
            if(n == 0) break;
            chk = false;
            for(int i=2;i<=n/2;i++) {

                if(!arr[i] && !arr[n-i]) {
                    sb.append(n).append(" = ").append(i).append(" + ").append(n-i).append("\n");
                    chk = true;
                    break;
                }
            }
            if(!chk) sb.append(wrongAnswer).append("\n");
        }
        System.out.println(sb);
    }
}
