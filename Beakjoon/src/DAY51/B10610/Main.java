package DAY51.B10610;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String args[]) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int sum = 0;

        char[] charArr = br.readLine().toCharArray();
        Arrays.sort(charArr);	// 오름차순 정렬
        int len = charArr.length;

        StringBuilder sb = new StringBuilder();
        for(int i = len - 1; i >= 0; i--) {
            int num = charArr[i] - '0';
            sum += num;
            sb.append(num);
        }

        if(charArr[0] != '0' || sum % 3 != 0) {
            System.out.println(-1);
            System.exit(0);
        }

        System.out.println(sb);
    }
}
