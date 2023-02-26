package DAY28.B1339;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main{

    static BufferedReader br;
    static int N;
    static String str;
    static int[] alpha;
    static int l, num, answer;

    public static void main(String[] args) throws NumberFormatException, IOException {

        // System.setIn(new FileInputStream("./input.txt"));
        br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        alpha = new int[26];

        for(int i = 0; i < N; i++) {
            str = br.readLine();
            for(int j = 0; j < str.length(); j++) {
                // 자릿수만큼 10의 거듭제곱 더해준다
                alpha[str.charAt(j) - 'A'] += (Math.pow(10, str.length() - j - 1));
            }
        }

        Arrays.sort(alpha);

        // System.out.println(Arrays.toString(alpha));

        num = 9;

        for(int i = 25; i >= 0; i--) {
            if(alpha[i] == 0) {
                continue;
            }
            answer += (alpha[i] * num); // 큰 애부터 9 8 7 6... 순서대로 붙여준다
            num--;
        }

        System.out.println(answer);

    }

}