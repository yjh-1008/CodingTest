package DAY28.B1339;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    static int answer =0;

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] alpha = new int[26];
        for(int i=0; i<n;i++) {
            char []tmp =br.readLine().toCharArray();
           for(int j=0;j<tmp.length;j++) {
               alpha[tmp[j]-'A'] += (int) Math.pow(10, tmp.length - j - 1);
           }
        }
        Arrays.sort(alpha);

       int  num = 9;
        for(int i=25;i>=0;i--) {
            if(alpha[i] == 0) continue;
            answer+= alpha[i]*num;
            num-=1;
        }
        System.out.println(answer);
    }
}
